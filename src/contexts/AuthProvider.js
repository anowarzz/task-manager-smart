import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../config/firebase/firebase.config';


// Context for authentication
export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


// Creating a new user
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
};

//User Login
const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    }


// User Login With Email
const googleLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
}


// Updating user info 
const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
}


// Log out a user
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}



// Observing user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user in auth state", currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    


const userInfo = {user, setUser, loading, setLoading, createUser, googleLogin, logIn, updateUserProfile, logOut}


    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;