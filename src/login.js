import React, { Component } from 'react';
import Login from './login';
import './App.css';

export default class App extends Component { 

  handleLogin = (event) =>{ 
    event.preventDefault();
    const user = this.refs.loginInput.value;
    const pass = this.refs.passwordInput.value;
    if (user === "antoine" && pass ==="ilovetomtom"){
      this.props.login();
    }
  }

  render(){
    return (
        <div className="login">
          <h1>Garbougie Driver</h1>
          <form className="login-form" onSubmit={this.handleLogin.bind(this)} >
              <input type="text" placeholder="Username" ref="loginInput"></input>
              <input type="text" placeholder="Password" ref="passwordInput"></input>
              <button className="login-button">Login</button>
          </form>
        </div>
    );
  }
}

