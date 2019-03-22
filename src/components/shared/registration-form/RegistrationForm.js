import React from 'react'
import '../../../styles/main.css'
import './registration-form.css'
import {Link, withRouter} from 'react-router-dom'
import { ClipLoader} from 'react-spinners'
import {toast} from 'react-toastify'
import { userSignup } from '../../../actions/authActions'
import {connect} from 'react-redux'

export class RegistrationForm extends React.Component {
  state = {
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    loading: false
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit= async(e) => {console.log('it is running >>><');
    e.preventDefault();
    const signUpData = this.state;
    this.props.userSignup(signUpData)
    .then(() => {
        this.setState({
          loading: true
        })
        toast.success('Registration successful, login to continue')
        this.props.history.push('/login')
    })
    .catch(error => { 
        toast.error('An error while trying to register you')
    })
  }

  render() {
    const {email,username, firstname, lastname, password} = this.state;
    return( 
      <div className="form-holder">
        <form className="form" method="post" onSubmit={this.handleSubmit}> 
        <div>
          <p>
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
            <button type="submit" id="submitBtn" className="submitBtn"><span className="loading"> <ClipLoader color={'white'} loading={this.state.loading} size={18} /><p>Register</p></span></button>
          <p className="message">Already have an account? <Link to="/login" className="linker"> Login</Link></p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {userSignup})(withRouter (RegistrationForm));