import './Nav.css'
import logo from '../assets/FSA_logo.png'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <div><img src={logo} alt="" height={60} width={75}/></div>
        <div><input type="text" placeholder='Search' /></div>
        <div className='nav-right'>
            <Link><span>Home</span></Link>
            <Link><span>About</span></Link>
            <Link><span>Contact Us</span></Link>
        </div>
      </nav>
    )
  }
}

export default Nav