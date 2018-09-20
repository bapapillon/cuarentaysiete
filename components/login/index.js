// Import FirebaseAuth and firebase.
import React from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { auth, database } from '../../lib/firebase';

let StyledFirebaseAuth;
if (typeof window !== 'undefined') {
  StyledFirebaseAuth = require('react-firebaseui/StyledFirebaseAuth').default;
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  callbacks: {
    signInSuccess() {}
  },
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID]
};

const loginStyle = {
  position: 'fixed',
  bottom: 1,
  zIndex: 999
};

export default class SignInScreen extends React.Component {
  state = {};

  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(this.handleAuthStateChanged);
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  handleAuthStateChanged = user => {
    this.setState({ showLogin: !user });
    this.props.onAuthStateChanged(user);
  };

  render() {
    return (
      <div style={loginStyle}>
        {this.state.showLogin && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />}
      </div>
    );
  }
}
