import React from 'react';
import { withRouter } from 'react-router-dom';
//Higher Order Component -> 'kinda like a function that gives you back a 
//powered up component, i.e. 'powering up our MenuItem component to give
//more stuff like {history}



import './menu-item.styles.scss';
//this will hold the individual menu item 
//functional item because don't need state here 
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => ( 
    //where does location, match and history props come from? From withRouter(MenuItem)
    //these are react-router-dom specific props to the browser and stuff, not our own
    //destructuring our props to get title into it
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />            
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
)

export default withRouter(MenuItem);