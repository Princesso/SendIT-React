import authReducer from '../authReducer';

const initialState = {
  isAuthenticated: false,
  user: {},
 };

 it ('login a user', ()=> {
  const state = authReducer([], {
    type: 'SET_USER',
    payload: {
      isAuthenticated: true,
      user: {},
    }
  });
  expect(state.isAuthenticated).toEqual(true)
});

it ('logout a user', ()=> {
  const state = authReducer([], {
    type: 'LOGOUT_USER',
    payload: {
      isAuthenticated: false,
      user: {},
    }
  });
  expect(state.isAuthenticated).toEqual(false)
});
