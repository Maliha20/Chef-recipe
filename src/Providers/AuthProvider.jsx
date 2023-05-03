import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

 const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
 }
 const SignInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
 }

 const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
 }

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
       setLoading(false)
    })
     return ()=>{
        unsubscribe();
     }
 },[])

 const GoogleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)

 }
 const GithubSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
 }
  const profileUpdate =(name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,
        {
            displayName: name,
            photoURL: photo,
        })
  }

  const profileData =(email,photo,name) =>{
    setUser({...user, email: email,  displayName: name, photoURL: photo})
  }

 const authInfo =
     {
    user,
    loading,
    createUser,
    SignInUser,
    profileUpdate,
    profileData,
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