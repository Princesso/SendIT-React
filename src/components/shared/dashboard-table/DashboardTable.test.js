import React from 'react';
import {DashboardTable }from './DashboardTable';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Store from '../../../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {getUserParcels} from '../../../actions/userActions'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';

jest.mock('../../../actions/userActions');

Enzyme.configure({ adapter: new Adapter() });

test('Dashboard table', () => {
  const getUserParcels = jest.fn()
  getUserParcels.mockResolvedValue([]);


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
    },
    userParcels: [
      {id:1, status: 'pending', senton: '2019-03-26T17:38:03.000Z', itemname: 'bag' , currentlocation:'Abuja' , toaddress: 'Lagos',
        }, 
    {
      id:2, status: 'canceled', senton: '2019-03-26T17:38:03.000Z', itemname: 'bag' , currentlocation:'Abuja' , toaddress: 'Lagos',
    }
  ],
  getUserParcels: getUserParcels,
  }

  const total = props.userParcels.length
  const canceledParcels = props.userParcels.filter(parcel => parcel.status == 'canceled').length
  const pendingParcels = props.userParcels.filter(parcel => parcel.status == 'pending').length
  const deliveredParcels = props.userParcels.filter(parcel => parcel.status == 'delivered').length
  
  const component = renderer.create(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <DashboardTable {...props}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('it should handle click when new parcel button is clicked', async()=> {
  const toggleModalView = jest.fn();
  const toggleViewParcel = jest.fn()
  getUserParcels.mockResolvedValue([]);

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
    },
    userParcels: [
      {id:1, status: 'pending', senton: '2019-03-26T17:38:03.000Z', itemname: 'bag' , currentlocation:'Abuja' , toaddress: 'Lagos',
        }, 
    {
      id:2, status: 'canceled', senton: '2019-03-26T17:38:03.000Z', itemname: 'bag' , currentlocation:'Abuja' , toaddress: 'Lagos',
    }
  ], 
  getUserParcels: getUserParcels
}

  const total = props.userParcels.length
  const canceledParcels = props.userParcels.filter(parcel => parcel.status == 'canceled').length
  const pendingParcels = props.userParcels.filter(parcel => parcel.status == 'pending').length
  const deliveredParcels = props.userParcels.filter(parcel => parcel.status == 'delivered').length
  

  const wrapper =await  mount(
    <Provider store={Store}>
      <BrowserRouter>
          <Switch>
            <DashboardTable {...props}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  );
  expect(wrapper.find(DashboardTable).state('viewParcel')).toEqual(false);
  wrapper.find('button').at(1).simulate('click');
  expect(wrapper.find(DashboardTable).state('viewParcel')).toEqual(true);
});
