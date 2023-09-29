import React from 'react';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import AppAuthProvider from '@crema/context/AppAuthProvider';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/slice';
import { resetStateAction } from '../redux/resetStateAction';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  return (
    <AppAuthProvider
      onLogout={() => {
        dispatch(logout())
        dispatch(resetStateAction())
      }}
    >
      {children}
    </AppAuthProvider>
  );
};

export default AuthProvider;
