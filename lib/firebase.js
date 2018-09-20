import firebase from 'firebase';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
  apiKey: 'AIzaSyCxziB5mbMuAt_NPQNfoZFT68DCGpxdt-A',
  authDomain: 'sesentaydos-7c76a.firebaseapp.com',
  databaseURL: 'https://sesentaydos-7c76a.firebaseio.com/',
  storageBucket: 'sesentaydos-7c76a.appspot.com'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
console.log('blabla');

export const database = firebase.database();
export const auth = firebase.auth();

export default firebase;
