// Import FirebaseAuth and firebase.
import React from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { auth } from '../../lib/firebase';

let StyledFirebaseAuth
if (typeof window !== 'undefined') {
  StyledFirebaseAuth = require('react-firebaseui/StyledFirebaseAuth').default
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

export default class SignInScreen extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({ showLogin: true })
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        {this.state.showLogin && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>}
      </div>
    );
  }
}
