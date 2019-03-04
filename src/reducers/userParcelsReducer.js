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
      return [
        ...state,
        action.payload,
      ];
      case 'CREATE_PARCELS_FAIL':
      return [
        ...state,
        action.payload,
      ];
      case 'CANCEL_PARCEL_SUCCESS':
        const newState = state.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      return newState;
    case 'CANCEL_PARCEL_FAIL':
        return state;
    case 'CHANGE_DESTINATION_SUCCESS':
      const newState1 = state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return newState1;
      });
      case 'CHANGE_DESTINATION_FAILED':
      return state;
    default:
      return state;
  }
 }
