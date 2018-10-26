import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/pages/homepage'
import Login from '../components/pages/login'
 
class App extends Component{
  componentDidMount() {
    setTimeout(() => {
      fetch('http://localhost:8080/', {
        'Access-Control-Allow-Origin': '*'
      }).then((res) => {
        return res.json()
      })
      .then((res) => console.log({res}))
    }, 5000)
  }

  render(){
   return(
     <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />   
          <Route path="/" exact component={HomePage} />
        </Switch>
     </BrowserRouter>
   );
  }
}

export default App;