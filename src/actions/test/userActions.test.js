import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { createParcel, cancelUserParcel, changeUserParcelDestination, getUserParcels } from '../userActions';

jest.mock('axios');

const createMockStore = configureMockStore([thunk]);

describe ('User parcels actions', () => {
  const store = createMockStore({});
  beforeEach(() => { 
    store.clearActions();
  });

  it('Should create a parcel ',async ()=>{
    const response = {
      status: 201,
      data: {
        data: {
          currentlocation: 'Abuja',
          deliveredon: null,
          fromaddress: 'Abuja',
          id: 1,
          itemname: 'Pot',
          placedby: 1,
          recipient: 'Princess',
          senton: '2019-03-26T17:38:03.000Z',
          status: 'pending',
          toaddress: 'Enugu',
          weight: 1,
          weightmetric: 'kg',
          message: 'New parcel added successfuly',
          status: 201
        }
      }
    };

    axios.post.mockResolvedValue(response);
    const parcel = {
      itemName: 'Bags',
      weight: 1,
      fromAddress: 'Abuja',
      toAddress: 'Enugu',
      phoneNumber: '08063871704',
      recipientName: 'Ebube',
      loading: false
    };
    await store.dispatch(createParcel(parcel, jest.fn()));
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'CREATE_PARCELS_SUCCESS',
      payload: response.data.data
    });
  });

  it('Should get user parcels ',async ()=>{
    const response = {
      status: 200,
      data: {
        data: [
          {
            currentlocation: "Abuja",
            deliveredon: null,
            fromaddress: "Abuja",
            id: 1,
            itemname: "Pot",
            placedby: 1,
            recipient: "Princess",
            senton: "2019-03-26T17:38:03.000Z",
            status: "pending",
            toaddress: "Enugu",
            weight: 1,
            weightmetric: "kg"
          }
        ]
      }
    };

    axios.get.mockResolvedValue(response);
    await store.dispatch(getUserParcels());
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'GET_PARCELS_SUCCESS',
      payload: response.data.data
    });
  });

  it('Should cancel user parcels ',async ()=>{
    const response = {
      status: 200,
      data: {
        data: [
          {
            currentlocation: "Abuja",
            deliveredon: null,
            fromaddress: "Abuja",
            id: 1,
            itemname: "Pot",
            placedby: 1,
            recipient: "Princess",
            senton: "2019-03-26T17:38:03.000Z",
            status: "canceled",
            toaddress: "Enugu",
            weight: 1,
            weightmetric: "kg"
          }
        ]
      }
    };

    axios.patch.mockResolvedValue(response);
    await store.dispatch(cancelUserParcel(1, jest.fn()));
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'CANCEL_PARCEL_SUCCESS',
      payload: response.data.data
    });
  });

  it('Should change destination of a parcel ',async ()=>{
    const response = {
      status: 200,
      data: {
        data: [
          {
            currentlocation: "Abuja",
            deliveredon: null,
            fromaddress: "Abuja",
            id: 1,
            itemname: "Pot",
            placedby: 1,
            recipient: "Princess",
            senton: "2019-03-26T17:38:03.000Z",
            status: "canceled",
            toaddress: "Enugu",
            weight: 1,
            weightmetric: "kg"
          }
        ]
      }
    };

    axios.patch.mockResolvedValue(response);
    await store.dispatch(changeUserParcelDestination(1, jest.fn()));
    const [action] = store.getActions();
    expect(action).toEqual({
      type: 'CHANGE_DESTINATION_SUCCESS',
      payload: response.data.data
    });
  });


});