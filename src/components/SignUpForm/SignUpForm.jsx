import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  loginInputId = nanoid();
  passwordInputId = nanoid();
  emailInputId = nanoid();

  // Відповідає за оновлення стану
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Викликається під час відправлення форми
  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>Name</label>
        <input
          type="text"
          placeholder="Enter login"
          name="login"
          value={login}
          onChange={this.handleChange}
          id={this.loginInputId}
        />
        <label htmlFor={this.emailInputId}>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={this.handleChange}
          id={this.emailInputId}
        />
        <label htmlFor={this.passwordInputId}>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={this.handleChange}
          id={this.passwordInputId}
        />

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
