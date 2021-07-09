import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as  ServiceWorker from './serviceWorker';
import firebase from "firebase/app"
import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDNC1DBFzK0VZCuRIbfNELRseKZoC7VEZs",
    authDomain: "cart-9756d.firebaseapp.com",
    databaseURL: "https://cart-9756d.firebaseio.com", 
    projectId: "cart-9756d",
    storageBucket: "cart-9756d.appspot.com",
    messagingSenderId: "484784765964",
    appId: "1:484784765964:web:0ca7a02ae6ea8d87504229"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// ServiceWorker.unregister();
