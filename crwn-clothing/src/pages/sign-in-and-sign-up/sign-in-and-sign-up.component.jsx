import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => (
    //using functional component and not a stateful class component, 
    //because we're going to keep all of that on our sign in and sign up 
    //component only
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;