import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Guindastes from './pages/Guindastes'
import Guindautos from './pages/Guindautos'
import Acessorios from './pages/Acessorios'
import Contato from './pages/Contato'
import Politicas from './pages/Politicas'
import Termos from './pages/Termos'
import Error from './pages/Error'
import { useRoutes } from 'react-router-dom';

export default function Routes() {
   return useRoutes([
      {
         path: "/",
         element: <Home />
      },
      {
         path: "/guindastes",
         element: <Guindastes />
      },
      {
         path: "guindautos",
         element: <Guindautos />
      },
      {
         path: "acessorios",
         element: <Acessorios />
      },
      {
         path: "contato",
         element: <Contato />
      },
      {
         path: "politicas",
         element: <Politicas />
      },
      {
         path: "termos",
         element: <Termos />
      },
      {
         path: '*',
         element: <Error />
      },
   ])
}
