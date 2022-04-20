import createSagaMiddleware from '@redux-saga/core';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from '../utils/history/history';
import authenticationReducer from './reducers/authenticationSlice';
import rootSaga from './sagas/rootSaga';
rootSaga
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  router: connectRouter(history),
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
