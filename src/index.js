import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyB3_5upivKtsgBdv95aztQvF71ZgFV0J4Q",
    authDomain: "chat-e6626.firebaseapp.com",
    projectId: "chat-e6626",
    storageBucket: "chat-e6626.appspot.com",
    messagingSenderId: "76261478561",
    appId: "1:76261478561:web:7278b58fe7886950a160e0",
    measurementId: "G-D6WPFVGGSH"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

