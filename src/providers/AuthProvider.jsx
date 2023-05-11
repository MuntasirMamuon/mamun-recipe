import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [name, setName ]= useState("")

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    // userName and userPhotoUrl function 

    const userDetails=(name,photoUrl)=>{
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoUrl
      })
      .then(() => setUser((user) => (
        { ...user, displayName: name, photoURL: photoUrl })))
     .catch((error) => { console.log(error) });
    }
    // google singIN function login page 
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
//    GitHub singIN function login page 
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    const handleName= event =>{
        setName(event.target.form.name.value)
    }
//    register page email and password part 
    const createUser = (email, password ) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login page email password part 
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    // login page logOut part 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])
//  sher funtion and data part 
    const authInfo={
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        logOut, 
        signInWithGoogle,
        signInWithGithub,
        handleName,
        userDetails

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;