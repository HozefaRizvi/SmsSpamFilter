// AuthProvider.js
import React from 'react';
import { AuthProvider as OriginalAuthProvider } from './AuthContext';

const AuthProviderWrapper = ({ children }) => {
  // You can add any additional logic here if needed
  return <OriginalAuthProvider>{children}</OriginalAuthProvider>;
};

export default AuthProviderWrapper;
