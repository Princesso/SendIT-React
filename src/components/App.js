import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/pages/homepage'
import Login from '../components/pages/login'
import styled from 'styled-components'
import '../styles/main.css'
import RegistrationPage from './pages/registration';
import DashboardPage from './pages/dashboard'

const StyledApp = styled.div`
  height: 100%
  margin: 0;
  padding: 0;
`
 
class App extends Component{
  render(){
   return(
     <BrowserRouter>
        <Switch>
          <StyledApp>
            <Route path="/register" exact component={RegistrationPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />  
            <Route path="/dashboard" exact component={DashboardPage} /> 
          </StyledApp>
        </Switch>
     </BrowserRouter>
   );
  }
}

export default App;