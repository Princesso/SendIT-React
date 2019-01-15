import React from 'react'
import './login-form.css'
import '../../../styles/main.css'
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return(
    <div className="form-holder">
      <form className="form"> 
      <h3>Login</h3>
        <input type="email" placeholder="Email" required id="email"></input>
        <input type="password" placeholder="Password" required  id="password"></input>
        <button type="submit" id="submitBtn">Login</button>
        <p id="message">Have no account? <Link to="/register" className="link"> Register</Link></p>
      </form>
    </div>
  )
}

export default LoginForm