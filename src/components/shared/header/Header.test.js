import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

test('Registration Form', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <Header/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})