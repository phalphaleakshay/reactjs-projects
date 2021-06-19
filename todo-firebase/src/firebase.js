import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0fGwWYf4fhxEBieooEpuR_ES82SloKhs",
    authDomain: "todo-app-42351.firebaseapp.com",
    databaseURL: "https://todo-app-42351.firebaseio.com",
    projectId: "todo-app-42351",
    storageBucket: "todo-app-42351.appspot.com",
    messagingSenderId: "93749528828",
    appId: "1:93749528828:web:d020fe7f5eece47bcf6f79"
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();