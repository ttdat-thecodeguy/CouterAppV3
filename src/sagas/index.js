import { put, takeEvery, all } from 'redux-saga/effects'
const delay = (ms) => new Promise(res => setTimeout(res, ms))


function * helloSaga() {
    console.log("Hello Saga");
}

function* incrementSync(){
    yield delay(1000)
    yield put
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
  

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}