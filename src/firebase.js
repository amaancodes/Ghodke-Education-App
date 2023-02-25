// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkrwBUD1xKlY17ud36VSQCPoBQEpTIs1M",
  authDomain: "ghodke-education-app.firebaseapp.com",
  projectId: "ghodke-education-app",
  storageBucket: "ghodke-education-app.appspot.com",
  messagingSenderId: "1047195115212",
  appId: "1:1047195115212:web:42b191fffd032a91ff6c69"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()

export {auth};