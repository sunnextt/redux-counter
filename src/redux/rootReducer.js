import { combineReducers } from 'redux';

import counter from './reducers/counterSaga';

export const rootReducer = combineReducers({
counter
});