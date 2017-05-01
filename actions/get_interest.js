import ActionTypes from '../constants/action_types';
import database from './database';

export function getInterest() {
  return dispatch => {
    console.log('***Hit here*****');
    dispatch(getInterestRequestedAction());
    database.ref('/').once('value', snap => {
      const interest = snap.val();
      console.log('*****', interest, '******');
      dispatch(getInterestFulfilledAction(interest))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getInterestRejectedAction());
    });
  }
}

function getInterestRequestedAction() {
  return {
    type: ActionTypes.GetInterestRequested
  };
}

function getInterestRejectedAction() {
  return {
    type: ActionTypes.GetInterestRejected
  }
}

function getInterestFulfilledAction(invite) {
  return {
    type: ActionTypes.GetInterestFulfilled,
    invite
  };
}