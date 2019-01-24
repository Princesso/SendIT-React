const initialState = {
  userParcels: [],
  newParcel: {}
 };
 
/***
 * The data structure of the initial state
 * is always same as the data structure of 
 * what is being returned
 */
 export default function (state = [], action) {
  switch (action.type) {
    case 'GET_PARCELS_SUCCESS':
      return [
        ...state,
        ...action.payload,
      ];
      case 'GET_PARCELS_FAIL':
      return [
        ...state,
        ...action.payload,
      ];
      case 'CREATE_PARCELS_SUCCESS':
      return {
        ...state,
        newParcel: action.payload,
      };
      case 'CREATE_PARCELS_FAIL':
      return {
        ...state,
        newParcel: action.payload,
      };
    default:
      return state;
  }
 }
