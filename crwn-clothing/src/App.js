import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

/*CRWN CLOTHING PLANNING:
  - top has a header
  - Has one big container (directory-menu) 
    holding 3 small and two medium (total 5, menu-item)
    components
  - Each component has a container holding the image and inside
    component holding the title

*/
function App() {
  return (
    <div>
      <HomePage />     
    </div>
  );
}

export default App;
