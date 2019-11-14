import React, { Component } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends Component {
  state= {
    email: '',
    password: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const { email, password } = this.state;

      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });

    } catch(error) {
      console.error(error);
    }
    
  }

  render() {
    return (
      <div className="sign-in">        
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;