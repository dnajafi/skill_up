import ActionTypes from '../constants/action_types';
import database from './database';

export function addToInterest(name) {
	return dispatch => {
		dispatch(addToInterestRequestedAction());
		const interestedRef = database.ref('/interested');
		
		interestedRef.push({
			name
		})
		.then(() => {
			dispatch(addToInterestFulfilledAction({ name }));
		})
		.catch((error) => {
			dispatch(addToInterestRejectedAction());
		});
	}
}

function addToInterestRequestedAction() {
	return {
		type: ActionTypes.AddToInterestRequested
	};
}

function addToInterestRejectedAction() {
	return {
		type: ActionTypes.AddToInterestRejected
	};
}

function addToInterestFulfilledAction(newInterest) {
	return {
		type: ActionTypes.AddToInterestFulfilled,
		newInterest
	};
}