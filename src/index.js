import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'


var firebaseConfig = {
  apiKey: "AIzaSyCG_utwLvqSFBPyZXcfBEf9n_pACYrjdec",
  authDomain: "crudprojectthree.firebaseapp.com",
  projectId: "crudprojectthree",
  storageBucket: "crudprojectthree.appspot.com",
  messagingSenderId: "853290601921",
  appId: "1:853290601921:web:f1e88d61c7735ea7f77340"
};


firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

