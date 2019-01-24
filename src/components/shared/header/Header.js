import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <div className="header">
      <div className="logo"> Send-It</div>
      <div>
        <ul>
        <li><Link to="/" className="link">HOME</Link></li>
        <li><Link to="/" className="link">ABOUT</Link></li>
        <li><Link to="/login" className="link">LOGIN</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header