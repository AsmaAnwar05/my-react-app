import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "about", element: <About /> },
        { path: "user/:username", element: <User /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
