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
  		const { interested, skills, teacher, description, image_url, motto } = action.data;

  		const newState = Object.assign({}, state, {
  			inProgress: false,
  			success: 'Successfully retrieved people interested in learning your skills',
  			skills,
  			teacher,
        description,
        image_url,
        motto
  		});

  		newState.interested = [];
  		if(interested) {
        var names = [];
        for(var k in interested) {
          names.push(interested[k]["name"]);
        }
        newState.interested = names;
  		}
  		return newState;
  	}

    case ActionTypes.AddToInterestRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }

    case ActionTypes.AddToInterestRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding interested person.',
      });
    }

    case ActionTypes.AddToInterestFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added person who is interested in learning your skills.'
      });
      newState.interested = newState.interested || [];
      newState.interested = newState.interested.slice();
      newState.interested.push(
        {
          name: action.name, 
          email: action.email,
          phone: action.phone
        }
      );
      return newState;
    }

    default:
      return state;
  }
}

   