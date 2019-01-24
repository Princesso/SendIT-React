import axios from 'axios'
import {getUserToken} from '../auth/authorizeUser'

export const getUserParcels = () => (dispatch) => {
  axios
    .get('https://sendit-it.herokuapp.com/api/v1/parcels', {
      headers: {
        Authorization: 'Bearer ' + getUserToken()
      }
    })
    .then((response) => {
      if (response.status==204 || response.status == 400) {
        document.getElementById("dashboard-error").innerText = "You have not created any parcel delivery orders"
      }
      else {
        dispatch({type: 'GET_PARCELS_SUCCESS', payload: response.data.data})
      }

    })
    .catch(error =>
      dispatch({
        type: 'GET_PARCELS_FAIL',
        payload: null
      })
    )
    
}

export const createParcel = (newDeliveryData) => (dispatch) => {
  axios
    .post('https://sendit-it.herokuapp.com/api/v1/parcels', newDeliveryData, {
      headers: {
        "Authorization": `Bearer ${getUserToken()}`
      }
    })
    .then((response) =>{
      if (response.status==201) 
      return dispatch({type: 'CREATE_PARCELS_SUCCESS', payload: response.data})
      return dispatch({type: 'CREATE_PARCELS_FAIL', payload: 'Failed to get parcels'})
    })
}