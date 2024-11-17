import React, { createContext } from "react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// FACEBOOK AUTH PROVDER
const facebookProvider = new FacebookAuthProvider();

const AuthStateProvider = ({children}) => {
    // Sign in With **FACEBOOK**
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };
    const authInfo = { signInWithFacebook };

    //  Clear user data and state

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthStateProvider;
