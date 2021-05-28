import { fork } from '@redux-saga/core/effects';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([]);
}
