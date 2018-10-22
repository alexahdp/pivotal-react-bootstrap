import Immutable from 'immutable';
import {handleActions} from 'redux-actions';
import {actions} from './actions';

const mainReducer = handleActions(
    {
      [actions.SAY_HELLO](state) {
        return state;
      },
    },
    Immutable.fromJS({})
);

export default mainReducer;
