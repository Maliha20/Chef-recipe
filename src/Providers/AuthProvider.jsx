import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

 const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }
 const SignInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email,password)
 }

 const GoogleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)

 }
 const GithubSignIn = () =>{
    return signInWithPopup(auth, githubProvider)
 }
  const user = null
 const authInfo =
     {
    user,
    createUser,
    SignInUser,
    GoogleSignIn,
    GithubSignIn

     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;