import { PayloadAction } from '@reduxjs/toolkit';
import {takeLatest} from 'redux-saga/effects';

function* loginSaga(action: PayloadAction) {

}

export default function* authenticationSaga() {
  // yield takeLatest(, loginSaga);
}
