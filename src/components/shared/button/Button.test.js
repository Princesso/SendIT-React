import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

test('Button', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <Button/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})