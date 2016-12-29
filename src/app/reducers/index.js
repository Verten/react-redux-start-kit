import {combineReducers} from 'redux';
import todos from './todos';
import userReducer from './user'

const rootReducer = combineReducers(Object.assign({}, {
  todos,
  userReducer
}));

export default rootReducer;
