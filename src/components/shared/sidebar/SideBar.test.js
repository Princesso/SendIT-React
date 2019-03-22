import React from 'react';
import SideBar from './SideBar';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

test('Side Bar', () => {
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <SideBar/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})