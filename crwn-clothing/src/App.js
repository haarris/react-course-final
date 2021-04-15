import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import TestFunctionComponent from './pages/test-component/test-component';

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
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     /*
      this.setState({ currentUser: user});

      console.log(user);
     */
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id, 
            ...snapShot.data() 
          }
        }, 
        () => {
          console.log(this.state);
        }
        );
      });
    }
    //createUserProfileDocument(user);
    this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/contact' component={TestFunctionComponent} />
        </Switch>
  
      </div>
    );
  }
  
}

export default App;
