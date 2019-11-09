import React, { Component } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

class SignIn extends Component {
  state= {
    email: '',
    password: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
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
          <CustomButton type="submit">Submit Form</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;