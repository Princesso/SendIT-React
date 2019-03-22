import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

test('Registration Form', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <Footer/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})