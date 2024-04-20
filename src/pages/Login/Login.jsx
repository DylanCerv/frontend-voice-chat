import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Login() {

  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('12345');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { loginContext } = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPI(email, password);
      loginContext(response.token)

      navigate('/dashboard');
    } catch (error) {
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>

      <div>
        <Link to={'/auth/register'} >Register</Link>
        <br />
        <Link to={'/'} >Landing</Link>
      </div>
    </div>
  )
}
