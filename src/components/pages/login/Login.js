import React from 'react';
import Header from '../../shared/header'
import LoginForm from '../../shared/login-form'
import Footer from '../../shared/footer'
import MainContent from '../../shared/main-content'

const Login= () => {
  return(
    <div>
      <Header/>
      <MainContent>
        <LoginForm/>
      </MainContent>   
      <Footer/>
    </div>
  )
}

export default Login