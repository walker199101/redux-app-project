import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { INCREASE_ASYNC, DECREASE_ASYNC, increase, decrease } from './../redux';

function* increaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
  }
function* decreaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}