import React, { useEffect, useState } from "react";
import app from "./Config/firebase";
import {getUser} from "../../firestore";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged(async (user) => {
            console.log(user);
            if (user != null) {
                let userDetails = await getUser(user.uid);
                console.log(userDetails.data());
                setCurrentUser(userDetails.data());
            } else {
                //logout
                setCurrentUser(null);
            }
            setPending(false)
        });
    }, []);
    //add logo__________________________________
    if(pending){
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
