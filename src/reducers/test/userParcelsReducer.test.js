import userParcelsReducer from '../userParcelsReducer';
import parcels from './parcel';

it ('should  get user parcels', ()=> {
  const state = userParcelsReducer([], {
    type: 'GET_PARCELS_SUCCESS',
    payload: [parcels]
  });
  expect(state.length).toEqual(parcels.length)
});

// it ('should  create a new parcel', async()=> {
//   const state = await userParcelsReducer([], {
//     type: 'CREATE_PARCELS_SUCCESSS',
//     payload: parcels[0]
//   });
//   expect(state).toContainEqual([ parcels[0]])
// });

it ('should  cancel a parcel', async()=> {
  const state = await userParcelsReducer(parcels, {
    type: 'CANCEL_PARCEL_SUCCESS',
    payload: parcels[0].id
  });
  expect(state).toEqual([parcels[0]])
});

it ('should  change destination of a parcel', async()=> {
  const state = await userParcelsReducer(parcels, {
    type: 'CHANGE_DESTINATION_SUCCESS',
    payload: parcels[0].id
  });
  expect(state).toEqual([parcels[0]])
});