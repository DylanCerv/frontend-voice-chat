import React from 'react'
import { Link } from 'react-router-dom'

export default function Room() {


  return (
    <section className='bg-slate-100'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          {/* CTA box */}
          <div className="relative h-screen bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            {/* Background illustration */}
            <div className="absolute -left-20 bottom-0 pointer-events-none hidden lg:block">
              <svg className='rotate-90' width="428/6" height="328/6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative h-full flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="flex flex-col gap-10 text-center lg:text-left lg:max-w-xl h-full">
                <div>
                  <h3 className="h3 text-white mb-2">Sala de Estrategia</h3>
                  <p className="text-gray-300 text-lg mb-6">Bienvenido a la Sala de Estrategia, donde los héroes forjan su destino. Aquí, la táctica es clave y cada movimiento cuenta. Reúnete con tus aliados y traza el plan de batalla perfecto. Desde emboscadas sorpresa hasta asedios épicos, esta sala es el corazón de tu victoria. ¡Prepárate para la batalla, líder!</p>
                </div>

                <div className='flex gap-10'>
                  <Link to={'/'} className="btn text-white bg-blue-500 hover:bg-blue-700 shadow">Pagina Principal</Link>
                  <Link to={'/dashboard'} className="btn text-white bg-blue-500 hover:bg-blue-700 shadow">Dashboard</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
