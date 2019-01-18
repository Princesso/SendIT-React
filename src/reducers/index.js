import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import errorReducer from './errorReducer';
// import userOrdersReducers from './userOrdersReducer';

export default combineReducers({
 auth: authReducer,
//  errors: errorReducer,
//  userOrders: userOrdersReducers,
});