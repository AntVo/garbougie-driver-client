import React, { Component } from 'react';
import Login from './login';
import BeginScreen from './begin-screen';
import './App.css';

export default class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  }

  renderSection = () => {
    if (this.state.loggedIn === false){
      return (<Login login={this.logIn}/>);
    }
    if (this.state.loggedIn === true){
      return (<BeginScreen />);
    }
  }

  render(){
    return (
        <div>
          {this.renderSection()}
        </div>
    );
  }
}

