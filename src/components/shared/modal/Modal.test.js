import React from 'react';
import Modal from './Modal';
import { NewParcel } from './NewParcel';
import ViewParcel from './ViewParcel';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

test('Modal', () => {
  const wrapper = shallow(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <Modal> 
              <NewParcel/>
              <ViewParcel/>
            </Modal>
          </Switch>
      </BrowserRouter>
    </Provider>
  )
  expect(wrapper).toMatchSnapshot();
})


test('it should render new parcel component', ()=> {
  const wrapper = mount(
    <NewParcel/>
  )
  expect(wrapper).toMatchSnapshot();
});

test('it should render View parcel component', ()=> {
  const tree = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
        <ViewParcel/>
      </BrowserRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it should call toggle modal when send button is clicked', ()=> {
  const toggleModalView = jest.fn()
  const props = {
    toggleModalView,
    children: ViewParcel
  }
  const wrapper = mount(<Modal { ...props}/>)
  wrapper.find('button').simulate('click');
  expect(toggleModalView).toHaveBeenCalled();
});
