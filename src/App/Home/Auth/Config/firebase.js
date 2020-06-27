import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHI2XO8Gr-5_2NV-ZIfQl9rbnxT64ykZ4",
    authDomain: "armenian-trip.firebaseapp.com",
    databaseURL: "https://armenian-trip.firebaseio.com",
    projectId: "armenian-trip",
    storageBucket: "armenian-trip.appspot.com",
    messagingSenderId: "607941609579",
    appId: "1:607941609579:web:67d66f125f5ed915b6492e"
};
const app = firebase.initializeApp(firebaseConfig);
export default app;