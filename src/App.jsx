import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'
import Room from './pages/Room/Room'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        {/* Rutas de autenticación */}
        <Route path='auth'>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
        <Route path="sala" element={<Room />} />
        {/* Ruta protegida */}
        <Route element={<ProtectedRoute redirectTo='auth/login' />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sala/:hash" element={<Room />} />
         </Route>
        <Route path="*" element={<h1 className='text-3xl'>ERROR PAGINA NO ENCONTRADA</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
