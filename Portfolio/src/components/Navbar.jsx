import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-itrm'>
                <NavLink className="navbar-link" to={"/"}>About</NavLink>
            </li>
            <li className='navbar-itrm'>
                <NavLink className="navbar-link" to={"/resume"}>Resume</NavLink>
            </li>
            <li className='navbar-itrm'>
                <NavLink className="navbar-link" to={"/portfolio"}>Portfolio</NavLink>
            </li>
            <li className='navbar-itrm'>
                <NavLink className="navbar-link" to={"/blogs"}>Blog</NavLink>
            </li>
            <li className='navbar-itrm'>
                <NavLink className="navbar-link" to={"/contact"}>Contact</NavLink>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar