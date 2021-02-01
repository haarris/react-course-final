import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

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
function App() {
  
  return (
    //<Route> -> if there's no 'exact' then it'll render all these  
    //components cumuatively (i.e. sidebyside)
    //<Switch> -> if there's no 'exact' then it'll render all these  
    //components exclusively 
//        <Route exact={true} path='/hats' component={HatsPage} />
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

f
    </div>
  );
}

export default App;
