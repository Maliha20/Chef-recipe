import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

 const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }
 const SignInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email,password)
 }

 const logOut = ()=>{
    return signOut(auth);
 }

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
    })
     return ()=>{
        unsubscribe();
     }
 },[])

 const GoogleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)

 }
 const GithubSignIn = () =>{
    return signInWithPopup(auth, githubProvider)
 }

 const authInfo =
     {
    user,
    createUser,
    SignInUser,
    GoogleSignIn,
    GithubSignIn,
    logOut

     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;