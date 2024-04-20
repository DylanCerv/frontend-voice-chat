import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('12345');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { loginContext } = useAuth();


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAPI(email, password);
      loginContext(response.token)
      
      navigate('/dashboard');
    } catch (error) {
      setError('Error al registrar. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>

      <div>
        <Link to={'/auth/login'} >Login</Link>
        <br />
        <Link to={'/'} >Landing</Link>
      </div>
    </div>
  )
}
