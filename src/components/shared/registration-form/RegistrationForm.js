import React from 'react'
import '../../../styles/main.css'
import './registration-form.css'
import {Link} from 'react-router-dom'

const RegistrationForm = () => {
  return( 
    <div className="form-holder">
      <form className="form"> 
        <h3>Register</h3>
        <input type="email" placeholder="Email" required id="email"></input>
        <input type="text" placeholder="Username" required id="username"></input>
        <input type="text" placeholder="Firstname" required id="firstname"></input>
        <input type="text" placeholder="Lastname" required id="lastname"></input>
        <input type="password" placeholder="Password" required id="password"></input>
        <button type="submit" id="submitBtn">Login</button>
        <p id="message">Already have an account? <Link to="/login" className="link"> Login</Link></p>
      </form>
    </div>
  )
}

export default RegistrationForm