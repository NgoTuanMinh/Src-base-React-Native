import { all } from "@redux-saga/core/effects";
import authenticationSaga from "./authenticationSaga";

export default function* rootSaga() {
    yield all([authenticationSaga()])
}