/* eslint-disable no-constant-condition */
import { put, takeEvery, delay, all, call } from 'redux-saga/effects'

export function* helloSaga() {
    yield console.log("hello world");
}


export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export default function* rootSaga() {
  yield all[
        call(helloSaga)
    ]
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
