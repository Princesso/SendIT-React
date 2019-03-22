import React from 'react'
import './button.css'
import {Link} from 'react-router-dom'

const Button = () => {
  return( 
      <Link to="/login" ><button className="button" type="button">Get Started</button></Link>  
  )
}

export default Button