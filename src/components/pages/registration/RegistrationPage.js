import React from 'react'
import RegistrationForm from '../../shared/registration-form'
import MainContent from '../../shared/main-content'
import Header from '../../shared/header'
import Footer from '../../shared/footer'

const RegistrationPage = () => {
  return(
    <div>
      <Header/>
      <MainContent>
        <RegistrationForm/>
      </MainContent>
      <Footer/>
    </div>
  )
}

export default RegistrationPage