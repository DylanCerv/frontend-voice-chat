import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {


  return (
    <div>
      <h1>Landing</h1>

      <div>
        <Link to={'auth/login'} >Login</Link>
        <br />
        <Link to={'auth/register'} >Register</Link>
      </div>
    </div>
  )
}
