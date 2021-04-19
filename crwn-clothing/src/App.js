import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import TestFunctionComponent from './pages/test-component/test-component';

import { setCurrentUser } from './redux/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/*CRWN CLOTHING PLANNING:
  - top has a header
  - Has one big container (directory-menu) 
    holding 3 small and two medium (total 5, menu-item)
    components
  - Each component has a container holding the image and inside
    component holding the title

*/
/*
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
) */
class  App extends React.Component {

  unsubscribeFromAuth = null;


  componentDidMount() {

    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     /*
      this.setState({ currentUser: user});

      console.log(user);
     */
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data() 
          });
      });
    }
    //createUserProfileDocument(user);
    setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      //<Route> -> if there's no 'exact' then it'll render all these  
      //components cumuatively (i.e. sidebyside)
      //<Switch> -> if there's no 'exact' then it'll render all these  
      //components exclusively 
  //        <Route exact={true} path='/hats' component={HatsPage} />
      <div>
        <Header />
        
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (
                                            <Redirect to='/' />
                                            ) : (
                                              <SignInAndSignUpPage />
                                            )
                                          } 
                                        />
          <Route path='/contact' component={TestFunctionComponent} />
        </Switch>
  
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
