import ActionTypes from '../constants/action_types';

export function interestedReducer(state = {}, action) {
  switch(action.type) {
  	case ActionTypes.GetInterestRequested: {
  		return Object.assign({}, state, {
  			inProgess: true,
  			error: '',
  			success: ''
  		});
  	}
  	case ActionTypes.GetInterestRejected: {
  		return Object.assign({}, state, {
  			inProgress: false,
  			error: 'Error in getting interest'
  		});
  	}
  	case ActionTypes.GetInterestFulfilled: {
  		const { interested, skills, teacher } = action.invite;

  		const newState = Object.assign({}, state, {
  			inProgress: false,
  			success: '',
  			skills,
  			teacher,
  		});

  		newState.interested = [];
  		if(interested) {
  			newState.interested = interested.map((person) => {
  				return person;
  			});
  		}
  		return newState;
  	}

    default:
      return state;
  }
}

   