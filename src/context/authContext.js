import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({});

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    //check if weather user is logged in or not
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
       });
       return ()=>{
        unsubscribe()
       }
    })
    return (
    <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
        {children}
    </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}