import { createStore, applyMiddleware } from 'redux';
import createSagaMiddle from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './sagas/counterSaga';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [ sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

