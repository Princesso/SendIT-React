import axios from 'axios'
import {getUserToken} from '../auth/authorizeUser'

const root = 'https://sendit-it.herokuapp.com';
export const getUserParcels = () => (dispatch) => {
  axios
    .get(`${root}/api/v1/parcels`, {
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

export const createParcel = (newDeliveryData, toggleModal) => (dispatch) => {
  axios
    .post(`${root}/api/v1/parcels`, newDeliveryData, {
      headers: {
        "Authorization": `Bearer ${getUserToken()}`
      }
    })
    .then((response) =>{
      if (response.status==201){
        toggleModal();
        return dispatch({type: 'CREATE_PARCELS_SUCCESS', payload: response.data.data})
      }
      return dispatch({type: 'CREATE_PARCELS_FAIL', payload: 'Failed to get parcels'})
    })
}

export const cancelUserParcel = (parcelId, toggleModal) => (dispatch) => {
  axios
    .patch(`${root}/api/v1/parcels/${parcelId}/cancel`, {}, {
      headers: {
        "Authorization": 'Bearer ' + getUserToken()
      }
    })
    .then( (response) => {
      if(response.status == 200 ) {
        toggleModal();
        return dispatch({type: 'CANCEL_PARCEL_SUCCESS', payload: response.data.data})
      } else {
        return dispatch({type: 'CANCEL_PARCEL_FAILED', payload: 'Failed to cancel delivery order'})
      }
    })
}

export const changeUserParcelDestination = (parcelId, newDestination ) => (dispatch) => {
  axios
    .patch(`${root}/api/v1/parcels/${parcelId}/destination`, newDestination , {
      headers: {
        Authorization: 'Bearer ' + getUserToken()
      }
    })
    .then( (response) => {
      if(response.status=200) 
        return dispatch({type: 'CHANGE_DESTINATION_SUCCESS', payload: response.data.data})
      else
      return dispatch({type: 'CHANGE_DESTINATION_FAILED', payload: 'Failed to change parcel destination'})
    })
}