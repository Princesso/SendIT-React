import axios from 'axios'

const root = 'https://sendit-it.herokuapp.com';
export const userLogin = (loginData) => (dispatch) => {
 return axios
  .post(`${root}/api/v1/auth/login`, loginData)
  .then((response) => {
    if(!response.data.token) {
      throw('no token in response')
    }
    window.localStorage.setItem('user_token', response.data.token)
    const decoded =  JSON.parse(atob(response.data.token.split('.')[1]));
    dispatch({type: 'SET_USER', payload: decoded })
   return response
  }).catch((error)=> {
      throw  error
  })
}

export const userLogout = () => (dispatch) => {
  window.localStorage.removeItem('user_token')
  return dispatch({type: 'LOGOUT_USER', payload:''})
}

export const userSignup = (signupData) => (dispatch) => {
  return axios
  .post('https://sendit-it.herokuapp.com/api/v1/auth/signup', signupData)
  .then((response)=> {
      dispatch({
        type: 'USER_SIGNUP_SUCCESSFUL',
        payload: response.data.data
      })
  })
  .catch(()=>{
    throw error
  })
}