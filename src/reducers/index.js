import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';
import { listReducer } from './listReducer';

export const Reducers = combineReducers({
  clickState: clickReducer,
  listState: listReducer
});
