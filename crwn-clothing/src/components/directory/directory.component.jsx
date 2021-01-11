import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
//directory component, will hold all the menu-items
//needs to be a class component because will need the state, 
//to store the state value of the menu items we'll
// pass to the actual menu-item components this directory 
//component is holding
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [ //each of the menu-items is like a 'section'
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]             
        }
    }

    render() {
        return (
            //in our render, need to return what we had in 
            //our homepage
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => ( 
                        //props being passed through
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>

        )
    }
}

export default Directory;