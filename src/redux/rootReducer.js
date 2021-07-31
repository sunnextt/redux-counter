import { combineReducers } from 'redux';

import { counter, countdown } from './reducers/counterSaga';


const rootReducer = combineReducers({
  countdown,
  counter,
})

export default rootReducer
