import React, { Component } from 'react';
import firebase from './config/firebase';
import Login from './Login'
import Home from './Home'

export class App extends Component {
  handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = '+917632926967';
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e) {
      let code = prompt('enter the otp','');
      if (code == null) return;
      e.confirm(code).then(function(result) {
        console.log(result.user,'user');
        document.querySelector('label').textContent = result.user.phoneNumber + "Number verified";



      }).catch((error) => {
        console.log(error)
      })

    })
  }
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })

      }
    })

  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
        <label> </label>
        <button onClick={this.handleClick}>Click Here</button>

      </div>
    );

  }
}


export default App;
