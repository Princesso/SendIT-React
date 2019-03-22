import React from 'react'
import './login-form.css'
import '../../../styles/main.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLogin} from '../../../actions/authActions'
import { ClipLoader } from 'react-spinners';
import { toast} from 'react-toastify';

export class LoginForm extends React.Component {
  state = {
    email: '',
    password:'',
    loading: false
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit= async(e) => {
    e.preventDefault();
    const loginData = this.state;
    //write validation function
    this.setState({
      loading: true
    })
    this.props.userLogin(loginData)
    .then(()=> {
     return toast.success('Login successful')
    })
    .catch(()=> {
      this.setState({loading: false})
      return toast.error('An error occurred while trying to log you in check your details');
    })
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
          <button type="submit" id="submitBtn"><span className="loading"> <ClipLoader color={'white'} loading={this.state.loading} size={20} /><p>Login</p></span></button>
          <p className="message"> <span></span> Have no account? <span><Link to="/register" className="linker"> Register</Link></span></p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {userLogin}) (withRouter(LoginForm))