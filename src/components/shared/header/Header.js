import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'
import './header.css'

const Header = () => {
  return(
    <div className="header">
      <div > Send-It</div>
      <div>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Header