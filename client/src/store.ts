import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { AnyAction, Dispatch } from 'redux';
import tempSlice from '@slice/tempSlice';
import authSlice from '@slice/authSlice';
import rootSaga from './saga/rootSaga';

const customMiddle = () => (next: Dispatch<AnyAction>) => (action: AnyAction): void => {
    next(action);
};
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tempSlice,
        authSlice,
    },
    middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false, }), customMiddle, sagaMiddleware ]
});

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
