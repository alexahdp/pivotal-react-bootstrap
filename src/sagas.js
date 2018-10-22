import { fork } from 'redux-saga/effects';
import mainSaga from './components/Main/saga';

function* appSaga() {
  yield fork(mainSaga);
}

export default appSaga;
