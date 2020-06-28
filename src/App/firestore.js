import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import app from "./Home/Auth/Config/firebase";

const db = app.firestore();

export const createUser = (userId, firstname, lastname, email, phone) => {
    return db.collection('users')
        .doc(userId)
        .set({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone:phone
        });
};

export const getUser = userId => {
    // console.log(userId);
    return db.collection('users')
        .doc(userId)
        .get();
};
