import React from 'react'
import '../../../styles/main.css'
import './registration-form.css'
import {Link, withRouter} from 'react-router-dom'
import {Validator} from  '../../../utils/validator'

class RegistrationForm extends React.Component {
  state = {
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    password: '',
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit= async(e) => {
    e.preventDefault();
    const signUpData = this.state;
    //write validation function
    // Validator(signUpData)
       await fetch('https://sendit-it.herokuapp.com/api/v1/auth/signup', {
        method: "POST",
        body: JSON.stringify(signUpData),
        headers: {"Content-Type": "application/json"}
      })
      .then(function(response) {
          return response.json();
      })
      .then((res) => {
        this.setState({
          email: '',
          username: '',
          firstname: '',
          lastname: '',
          password: '',
        })
        if(res.status==200) this.props.history.push('/login')  
        else {
          let newParagraph = document.createElement("p")
          let textNode = document.createTextNode("An error occurred while trying to register you")
          newParagraph.appendChild(textNode)
          let div = document.getElementById("register")
          div.insertBefore(newParagraph, div.childNodes[0])
          newParagraph.style.color('red')
        }
      })
      .catch(error => {
        
      })
  }

  render() {
    const {email,username, firstname, lastname, password} = this.state;
    return( 
      <div className="form-holder">
        {/* {this.state.error && <p>{this.state.error}</p>} */}
        <form className="form" method="post" onSubmit={this.handleSubmit}> 
        <div>
          <p>
            {/* render error */}
          </p>
        </div>
          <h3>Register</h3>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <input 
            type="text" 
            placeholder="Username" 
            required 
            id="username"
            name="username"
            value={username}
            onChange={ this.handleChange}
          />
          <input 
            type="text" 
            placeholder="Firstname" 
            required 
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={ this.handleChange}
          />
          <input 
            type="text" 
            placeholder="Lastname" 
            required 
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={ this.handleChange}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            id="password"
            name="password"
            value={password}
            onChange={ this.handleChange}
            />
          <button type="submit" id="submitBtn">Register</button>
          <p id="message">Already have an account? <Link to="/login" className="linker"> Login</Link></p>
        </form>
      </div>
    )
  }
}

export default withRouter (RegistrationForm);