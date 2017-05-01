import { combineReducers } from 'redux';
import { interestedReducer } from './interested_reducer';

const rootReducer = combineReducers({
  interested: interestedReducer
});

export default rootReducer;