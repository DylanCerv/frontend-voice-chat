import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

// import Link from 'next/link'
// import Logo from './logo'
// import Dropdown from '@/components/utils/dropdown'
// import MobileMenu from './mobile-menu'

export default function Header() {

  const { jwt, logoutContext } = useAuth();

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out `}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">


          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {!jwt ?
                <>
                  <li>
                    <Link to="/auth/login" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Iniciar Sesion</Link>
                  </li>
                  <li>
                    <Link to="/auth/register" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                      Registro
                    </Link>
                  </li>
                </>
                :
                <li>
                  <div onClick={logoutContext} className='btn cursor-pointer ml-auto bg-zinc-600 text-white'>Cerrar Sesión</div>
                </li>
              }
            </ul>

          </nav>

        </div>
      </div>
    </header>
  )
}
