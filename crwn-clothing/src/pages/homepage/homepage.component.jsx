import React from 'react';
import './homepage.styles.scss';
//installed sass  - "npm install node-sass@4.14.1"

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;