import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import ContianerForm from '../../components/ContianerForm/ContianerForm';
import TextError from '../../components/TextError/TextError';

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
    <ContianerForm
      title={"Registro"}
      onSubmit={handleRegister  }
      textButton={"Registrarse"}
      textFooter={"¿Ya tienes una cuenta?"}
      linkFooter={"/auth/login"}
      textLinkFooter={"Iniciar Sesión"}
    >
      {error && <TextError>{error}</TextError>}

      <div class="wrap-input100 validate-input">
        <input
          className="input100"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </div>

      <div class="wrap-input100 validate-input">
        <input
          className="input100"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
      </div>
    </ContianerForm>
  )
}
