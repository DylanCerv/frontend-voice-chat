import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || null);

  useEffect(() => {
    const storedJwt = localStorage.getItem('jwt');
    if (storedJwt) {
      setJwt(storedJwt);
    }
  }, []);

  const loginContext = (token) => {
    localStorage.setItem('jwt', token);
    setJwt(token);
  };

  const logoutContext = () => {
    localStorage.removeItem('jwt');
    setJwt(null);
  };

  const isAuthenticated = () => {
    return jwt !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        jwt,
        loginContext,
        logoutContext,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
