import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzv-ew0l_G5qsyUMm-nF4k2yKv4c_huJ0",
  authDomain: "steelpark-89d6c.firebaseapp.com",
  databaseURL: "https://steelpark-89d6c.firebaseio.com",
  projectId: "steelpark-89d6c",
  storageBucket: "steelpark-89d6c.appspot.com",
  //messagingSenderId: "97306971100",
  appId: "1:97306971100:web:1617bc93f7f4547b049d19"
  //measurementId: "G-421LML2RN2"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const storage = app.storage();
