import React, { createContext } from 'react';
import userFirebase from '../hooks/useFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allcontext = userFirebase();
  return (
    <div>
      <AuthContext.Provider value={allcontext}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
