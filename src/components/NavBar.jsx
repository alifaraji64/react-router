import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from './BreadCrumbs'
const NavBar = () => {
  return (
    <main>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
        <BreadCrumbs/>
      </header>
      <Outlet/>
    </main>
  )
}

export default NavBar
