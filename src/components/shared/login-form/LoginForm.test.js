import React from 'react';
import {LoginForm} from './LoginForm';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

test('Login Form', () => {
  const props = {
    auth: {
      isAuthenticated: true,
      user: {}
    },
    location: { 
      pathname: '/', 
      search: '', 
      hash: '', 
      state: undefined 
    },
    computedMatch: { 
      path: '/', 
      url: '/', 
      params: {}, 
      isExact: true 
    },
    history: {
      push: jest.fn()
    }
  }
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <LoginForm {...props}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('it should handle submit when login button is clicked', ()=> {
  const preventDefault = jest.fn();
  const props = {
    auth: {
      isAuthenticated: true,
      user: {}
    },
    location: { 
      pathname: '/', 
      search: '', 
      hash: '', 
      state: undefined 
    },
    computedMatch: { 
      path: '/', 
      url: '/', 
      params: {}, 
      isExact: true 
    },
    history: {
      push: jest.fn()
    }
  }

  const wrapper = shallow(<LoginForm {...props}/>)
  wrapper.find('form').simulate('submit', { preventDefault });
  expect(preventDefault).toHaveBeenCalled();
});

test('it should handle change when input is added', ()=> {
  const target = { 
    name: 'email',
    value: 'ada'
  }

  const props = {
    auth: {
      isAuthenticated: true,
      user: {}
    },
    location: { 
      pathname: '/', 
      search: '', 
      hash: '', 
      state: undefined 
    },
    computedMatch: { 
      path: '/', 
      url: '/', 
      params: {}, 
      isExact: true 
    },
    history: {
      push: jest.fn()
    }
  }

  const wrapper = shallow(<LoginForm {...props}/>)
  wrapper.find('input').at(0).simulate('change', { target });
  expect(wrapper.state(target.name)).toEqual(target.value);
});