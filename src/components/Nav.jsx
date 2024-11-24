import React from "react"
import { Link } from "react-router-dom"
import './Nav.css'
import logo from '../assets/FSA_logo.png'

const Nav = ({ setSearch, cartCount }) => {
  return (
    <nav className="navbar">
      <div><img src={logo} alt="" height={60} width={75}/></div>
      <div><input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/></div>
      <div className='nav-right'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact Us</Link>
            <Link to="/cart" style={{color:"red"}}>Cart ({cartCount})</Link>
        </div>
    </nav>
  )
}

export default Nav
