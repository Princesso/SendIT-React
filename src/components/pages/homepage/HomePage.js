import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../shared/header'
import Footer from '../../shared/footer'
import MainContent from '../../shared/main-content'
import SideBar from '../../shared/sidebar'
import Button from '../../shared/button'
import '../../../styles/main.css'

const StyledHomePage = styled.div`
  
`


const HomeText = () => {
  return(
    <div class="caption">
      <h2>Box it! Send it!</h2>
      <p id ="desc"> Deliver parcels anywhere</p>
      <Button/>
    </div>
  )
}


const HomePage = () => {
  return(
    <StyledHomePage>
       <Header/>
       <MainContent>
         <HomeText />
       </MainContent>
      <Footer/>   
    </StyledHomePage>
  )
}

export default HomePage