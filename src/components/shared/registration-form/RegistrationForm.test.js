import React from 'react';
import { RegistrationForm } from './RegistrationForm';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mount, shallow } from 'enzyme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

test('Registration Form', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <RegistrationForm/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('it should handle submit when register button is clicked', ()=> {
  const preventDefault = jest.fn();

  const wrapper = shallow(<RegistrationForm/>)
  wrapper.find('form').simulate('submit', { preventDefault });
  expect(preventDefault).toHaveBeenCalled();
});

test('it should handle change when input is added', ()=> {
  const target = { 
    name: 'username',
    value: 'ada'
  }

  const wrapper = shallow(<RegistrationForm/>)
  wrapper.find('input').at(0).simulate('change', { target });
  expect(wrapper.state(target.name)).toEqual(target.value);
});