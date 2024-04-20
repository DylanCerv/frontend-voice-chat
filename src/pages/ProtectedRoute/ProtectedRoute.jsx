import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({redirectTo='/'}) {

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <Outlet />
  )
}
