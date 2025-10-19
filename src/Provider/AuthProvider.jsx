import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   console.log(loading, user);

  // Create user
  const createUser = (email, password) => {
      setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user
  const signIn = (email, password) => {
      setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

   const updateUser = (updateData) => {
      return updateProfile(auth.currentUser, updateData);
   }

  // Log out user
  const logOut = () => {
    return signOut(auth);
  };

  // Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
