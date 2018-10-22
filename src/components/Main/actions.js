import {createAction} from 'redux-actions';
import ga from '../../helpers/genAction';

export const actions = {
  TEST_ACTION: ga('TEST_ACTION'),
};

export default {
  genAction: createAction(actions.TEST_ACTION),
};
