import React, { Component } from 'react';
import NavigationScreen from './navigation-screen';

export default class BeginScreen extends Component { 
 constructor(props){
    super(props);
    this.state = {
      isDriving: false,
    };
  }

  handleBeginDrivingButton = () => {
    this.setState({ isDriving: true });
  }

  renderBeginScreenSection = () => {
    if (this.state.isDriving === false){
     return (
        <div className="begin-screen">
          <button onClick={this.handleBeginDrivingButton}>begin route</button>
          <p> picture of route here </p>
        </div>
      );
    }
    if (this.state.isDriving === true){
      return (
        <NavigationScreen />
      );
    }

  }

  render(){
    return (
        <div>
          {this.renderBeginScreenSection()}
        </div>
    );
  }
}

