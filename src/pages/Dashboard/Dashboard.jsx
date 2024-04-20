import React from 'react'
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {

  const { logoutContext } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      
      <button onClick={()=>logoutContext()}>Logout</button>
    </div>
  )
}
