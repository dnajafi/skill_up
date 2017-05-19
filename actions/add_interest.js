import ActionTypes from '../constants/action_types';
import database from './database';

export function addToInterest(name, email, phone) {
	return dispatch => {
		dispatch(addToInterestRequestedAction());
		const interestedRef = database.ref('/interested');
		
		interestedRef.push({
			name,
			email,
			phone
		})
		.then(() => {
			dispatch(addToInterestFulfilledAction({ name, email, phone }));
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

function addToInterestFulfilledAction(name, email, phone) {
	return {
		type: ActionTypes.AddToInterestFulfilled,
		name,
		email,
		phone
	};
}