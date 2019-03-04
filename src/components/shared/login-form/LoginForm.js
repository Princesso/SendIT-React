import React from 'react'
import './login-form.css'
import '../../../styles/main.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLogin} from '../../../actions/authActions'

class LoginForm extends React.Component {
  state = {
    email: '',
    password:'',
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit= async(e) => {
    e.preventDefault();
    const loginData = this.state;
    //write validation function
    this.setState({
      email: '',
      password:'',
    })
    this.props.userLogin(loginData)
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated === true)
    this.props.history.push('/dashboard') 
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated === true)
    this.props.history.push('/dashboard') 
  }
  render() {
    const {email, password} = this.state
    return(
      <div className="form-holder">
        <form className="form" method="post" onSubmit={this.handleSubmit}> 
          <h3>Login</h3>
          <div>
            <p>
              {/* render error */}
            </p>
          </div>
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
            type="password" 
            placeholder="Password" 
            required  
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit" id="submitBtn">Login</button>
          <p id="message">Have no account? <Link to="/register" className="linker"> Register</Link></p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {userLogin}) (withRouter(LoginForm))