import React, { Component } from 'react'

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
    <div>
    <h1>Yaay</h1>
  </div>
   );
  }
}

export default App;