import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import ContianerForm from "../../components/ContianerForm/ContianerForm";
import TextError from "../../components/TextError/TextError";
import TextChangePageForm from "../../components/TextChangePageForm/TextChangePageForm";

export default function Login() {
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("12345");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { loginContext } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPI(email, password);
      loginContext(response.token);
      navigate("/dashboard");
    } catch (error) {
      setError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <ContianerForm
      title={"Login"}
      onSubmit={handleLogin}
      textButton={"Iniciar Sesión"}
      textFooter={"¿No tienes una cuenta?"}
      linkFooter={"/auth/register"}
      textLinkFooter={"Registrate"}
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
  );
}
