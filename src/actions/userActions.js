import axios from 'axios'
import {getUserToken} from '../auth/authorizeUser'

const root = 'https://sendit-it.herokuapp.com';
export const getUserParcels = () => (dispatch) => {
 return axios
    .get(`${root}/api/v1/parcels`, {
      headers: {
        Authorization: 'Bearer ' + getUserToken()
      }
    })
    .then((response) => {
        dispatch({type: 'GET_PARCELS_SUCCESS', payload: response.data.data})
        return response
    }).catch((error)=>{
        throw error
    })
    
}

export const createParcel = (newDeliveryData, toggleModal) => (dispatch) => {
  return axios
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
    })
    .catch(error => {
      throw error
    })
}

export const cancelUserParcel = (parcelId, toggleModal) => (dispatch) => {
 return axios
    .patch(`${root}/api/v1/parcels/${parcelId}/cancel`, {}, {
      headers: {
        "Authorization": 'Bearer ' + getUserToken()
      }
    })
    .then( (response) => {
        toggleModal();
        return dispatch({type: 'CANCEL_PARCEL_SUCCESS', payload: response.data.data})
    })
    .catch(error => {
      throw error
    })
}

export const changeUserParcelDestination = (parcelId, newDestination ) => (dispatch) => {
 return axios
    .patch(`${root}/api/v1/parcels/${parcelId}/destination`, newDestination , {
      headers: {
        Authorization: 'Bearer ' + getUserToken()
      }
    })
    .then( (response) => {
       dispatch({type: 'CHANGE_DESTINATION_SUCCESS', payload: response.data.data})
    })
    .catch(error => {
      throw error
    })
}