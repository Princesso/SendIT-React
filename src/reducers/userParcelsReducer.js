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
    
      case 'CREATE_PARCELS_SUCCESS':
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
    
    case 'CHANGE_DESTINATION_SUCCESS':
      const newState1 = state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    return newState1;
     
    default:
      return state;
  }
 }
