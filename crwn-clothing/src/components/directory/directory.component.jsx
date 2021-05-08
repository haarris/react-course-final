import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
//directory component, will hold all the menu-items
//needs to be a class component because will need the state, 
//to store the state value of the menu items we'll
// pass to the actual menu-item components this directory 
//component is holding
const Directory = ({ sections }) => (
  //in our render, need to return what we had in 
  //our homepage
  <div className='directory-menu'>
      {
          sections.map(({id, ...otherSectionProps }) => ( 
              //props being passed through
              //...otherSectionProps = ES6 property spread notation, basically 
              //prev props being pushed: title, imageUrl, size, linkURL
              <MenuItem key={id} {...otherSectionProps} />
          ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);