import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQErWYtZxFl09_eJub5V_863DM6Q70gsU",
    authDomain: "contacts-f7351.firebaseapp.com",
    databaseURL: "https://contacts-f7351.firebaseio.com",
    projectId: "contacts-f7351",
    storageBucket: "contacts-f7351.appspot.com",
    messagingSenderId: "43251766165",
    appId: "1:43251766165:web:f29292429dd81a8ea01c9c"
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();