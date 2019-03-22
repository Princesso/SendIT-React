import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { userLogin , userLogout, userSignup} from '../authActions';

jest.mock('axios');

const createMockStore = configureMockStore([thunk]);

describe ('User authentication actions', () => {
  const store = createMockStore({});
  beforeEach(() => { 
    store.clearActions();
  });

  it('Should login a user',async ()=>{
    const response = {
      status: 201,
      data: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRydTJjZW50QGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaXNBZG1pbiI6ZmFsc2UsInVzZXJuYW1lIjoiQWRhbm5lIiwiaWF0IjoxNTUzNjIxODUwLCJleHAiOjE1NTUzNDk4NTB9.SAAlwCC73tiBshyEKn8i3GKJePY4sDB7gozIWLII_0A',
        data: {
              "email": "tru2cent@gmail.com",
              "exp": 1555349850,
              "iat": 1553621850,
              "isAdmin": false,
              "userId": 1,
              "username": "Adanne",
        }
      }
    };

    const loginData = {
      email: 'ada@gmail.com',
      password:'password',
    }
    const decoded =  JSON.parse(atob(response.data.token.split('.')[1]));
    axios.post.mockResolvedValue(response);
    await store.dispatch(userLogin(loginData));
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'SET_USER',
      payload: decoded
    });
  });

  it('Should logout',async ()=>{
    await store.dispatch(userLogout());
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'LOGOUT_USER',
      payload: ''
    });
  });

  it('Should register a user',async ()=>{
    const response = {
      status: 200,
      data: {
        data: {
              "message": "registration successful",
              "status": 200
        }
      }
    };

    const signUpData = {
      email: 'ada@gmail.com',
      password:'password',
      firstname: 'Ada',
      lastname: 'Nne',
      password: 'password',
      username: 'username',
    }

    axios.post.mockResolvedValue(response);
    await store.dispatch(userSignup(signUpData));
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'USER_SIGNUP_SUCCESSFUL',
      payload: response.data.data
    });
  });
});