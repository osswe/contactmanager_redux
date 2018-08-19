import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import additionalReducer from './additionalReducer';


export default combineReducers({
  contact: contactReducer,
  additional: additionalReducer,
});
