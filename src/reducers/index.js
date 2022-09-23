import { combineReducers } from 'redux';
import stableReducer from './stable.reducer';
import listReducer from './list.reducer';

export default combineReducers({ // on combine les reducers pour créer un seul reducer qui va gérer toutes les actions de l'application
  stableReducer,  // on combine le reducer stableReducer (voir src/reducers/stable.reducer.js)
  listReducer,  // on combine le reducer listReducer (voir src/reducers/list.reducer.js)
})