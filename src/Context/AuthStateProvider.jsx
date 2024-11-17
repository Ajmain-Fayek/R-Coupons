import React, { createContext } from "react";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// FACEBOOK AUTH PROVDER
const facebookProvider = new FacebookAuthProvider();
// GOOGLE AUTH PROVDER
const googleProvider = new GoogleAuthProvider();

const AuthStateProvider = ({ children }) => {
    // Sign in With **FACEBOOK**
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };
    // Sign in with **GOOGLE**
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const authInfo = { signInWithFacebook, signInWithGoogle };

    //  Clear user data and state

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthStateProvider;
