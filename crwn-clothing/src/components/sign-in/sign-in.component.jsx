//import { findAllByLabelText } from '@testing-library/react';
//needed??
import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name} = event.target;
        //'pulling' our value and name variable inputs from the specific event to 
        //the state
        this.setState({ [name]: value });
        //if the 'name' is either 'password' or 'email' 
        //and value is anything but always corresponding binarily to either
        //the two -> ['email']: 'harris@github.com'
    };
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    value={this.state.email}
                    handleChange={this.handleChange} //points to 'handleChange'
                    label="email"
                    required
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} //points to 'handleChange'
                    label="password"
                    required
                />

                <div className='buttons'>
                    <CustomButton type="submit"> SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    SIGN IN WITH GOOGLE
                    </CustomButton>
                </div>
            </form>
            </div>
        )
    }
}

export default SignIn;