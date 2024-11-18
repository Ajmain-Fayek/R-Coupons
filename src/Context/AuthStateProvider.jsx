import React, { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    deleteUser,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// GOOGLE AUTH PROVDER
const googleProvider = new GoogleAuthProvider();

const AuthStateProvider = ({ children }) => {
    // Sign in with **EMAIL & PASSWORD**
    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in with **GOOGLE**
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Update USER INFO
    const updateUserInfo = (obj) => {
        return updateProfile(auth.currentUser, obj);
    };

    // DELETE User Account
    const deleteAccount = () => {
        return deleteUser(auth.currentUser);
    }
    const authInfo = {
        signUpWithEmailAndPassword,
        signInWithGoogle,
        updateUserInfo,
        deleteAccount,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthStateProvider;
