import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import main from './components/Main/reducer';

export default combineReducers({
  main,
});
