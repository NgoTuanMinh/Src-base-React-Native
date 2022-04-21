<<<<<<< HEAD
import { all } from "@redux-saga/core/effects";
import authenticationSaga from "./authenticationSaga";

export default function* rootSaga() {
    yield all([authenticationSaga()])
}
=======
import {all} from '@redux-saga/core/effects';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
>>>>>>> 5a9669523c02ad933ddab593f34d18233d607215
