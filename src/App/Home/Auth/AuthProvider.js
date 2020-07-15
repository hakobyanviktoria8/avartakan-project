import React, { useEffect, useState } from "react";
import app from "./Config/firebase";
import {getUser} from "../../firestore";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(async (user) => {
            if (user != null) {
                let userDetails = await getUser(user.uid);
                setCurrentUser(userDetails.data());
            } else {
                //logout
                setCurrentUser(null);
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }} >
            {children}
        </AuthContext.Provider>
    );
};
