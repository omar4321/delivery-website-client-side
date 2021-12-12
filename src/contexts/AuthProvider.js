import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import userFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allcontext = userFirebase();
  const { service } = useService();
  const { addToCart, orderPizza, remove, Checkout } = useCart();
  const data = {
    allcontext,
    service,
    addToCart,
    orderPizza,
    remove,
    Checkout,
  };
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
