import { fork } from '@redux-saga/core/effects';
import axios from 'axios';
import { all } from 'redux-saga/effects';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3065';

export default function* rootSaga() {
    yield all([]);
}
