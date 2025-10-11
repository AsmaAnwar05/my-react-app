import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/" className={e => e.isActive ? "red" : ""}>Home</NavLink></li>
      <li><NavLink to="/login" className={e => e.isActive ? "red" : ""}>Login</NavLink></li>
      <li><NavLink to="/about" className={e => e.isActive ? "red" : ""}>About</NavLink></li>
    </ul>
  </nav>
)

export default Navbar
