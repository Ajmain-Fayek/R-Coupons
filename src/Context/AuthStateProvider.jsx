import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    deleteUser,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// GOOGLE AUTH PROVDER
const googleProvider = new GoogleAuthProvider();

const AuthStateProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Sign Up with **EMAIL & PASSWORD**
    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in with **EMAIL & PASSWORD**
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with **GOOGLE**
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Update USER INFO
    const updateUserInfo = (obj) => {
        return updateProfile(auth.currentUser, obj);
    };

    // Sign Out User
    const logOutUser = () => {
        return signOut(auth);
    };

    // DELETE User Account
    const deleteAccount = () => {
        return deleteUser(auth.currentUser);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });

        return () => unsubscribe();
    });
    const authInfo = {
        signUpWithEmailAndPassword,
        signInWithGoogle,
        updateUserInfo,
        deleteAccount,
        setUser,
        logOutUser,
        signInUser,
        user,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthStateProvider;
