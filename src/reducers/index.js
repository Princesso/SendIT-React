import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userParcelsReducer from './userParcelsReducer'
// import errorReducer from './errorReducer';

export default combineReducers({
 auth: authReducer,
 userParcels: userParcelsReducer
//  errors: errorReducer,
});