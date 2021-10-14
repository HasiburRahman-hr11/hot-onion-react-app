import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutControl = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        });
    }

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false)
            }else{
                setLoading(false)
            }
        });
        return () => unsubscribe();
    }, [])

    return {
        user,
        error,
        loading,
        googleSignIn,
        signOutControl,
        setLoading,
        setError,
        setUser
    }
}

export default useFirebase;