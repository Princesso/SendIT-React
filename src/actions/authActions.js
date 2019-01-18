import axios from 'axios'
import SetAuthHeaders from '../auth/SetAuthHeaders'


export const userLogin = (loginData) => (dispatch) => {
  axios
  .post('https://sendit-it.herokuapp.com/api/v1/auth/login', loginData)
  .then((response) => {
    if(!response.data.token) {
      throw('no token in response')
    }
    window.localStorage.setItem('user_token', response.data.token)
    const decoded =  JSON.parse(atob(response.data.token.split('.')[1]));
    SetAuthHeaders(decoded)
    return dispatch({type: 'SET_USER', payload: decoded })
  })
}

export const userLogout = () => (dispatch) => {
  window.localStorage.removeItem('user_token')
  SetAuthHeaders(false)
  return dispatch({type: 'LOGOUT_USER', payload:''})
}