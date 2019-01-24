import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../../styles/colors'
import './main-content.css'
import Button from '../button'

const MainContent = () => {
  return(
    <div className="main-content">
     <div class="caption">
        <h2>Box it! Send it!</h2>
        <p id ="desc"> Deliver parcels anywhere</p>
        <Button/>
      </div>
    </div>
  )
}

export default MainContent