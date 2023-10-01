import React from 'react';
import AppAuthProvider from '@crema/context/AppAuthProvider';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/slice';
import { resetStateAction } from '../redux/resetStateAction';
import { useGetUserMutation } from '../api/api';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <AppAuthProvider
      onLogout={() => {
        dispatch(logout())
        dispatch(resetStateAction())
      }}
      useFetchCompanies={useGetUserMutation}
    >
      {children}
    </AppAuthProvider>
  );
};

export default AuthProvider;
