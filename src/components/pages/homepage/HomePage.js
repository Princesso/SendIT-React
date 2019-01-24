import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../shared/header'
import Footer from '../../shared/footer'
import MainContent from '../../shared/main-content'
import SideBar from '../../shared/sidebar'

const StyledHomePage = styled.div`
  
`

const HomePage = () => {
  return(
    <StyledHomePage>
       <Header/>
       <MainContent/>
      <Footer/>   
    </StyledHomePage>
  )
}

export default HomePage