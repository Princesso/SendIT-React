import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../../styles/colors'
import './main-content.css'
import Button from '../button'

const MainContent = ({ children }) => {
  return(
    <div className="main-content">
      {children}
    </div>
  )
}

export default MainContent