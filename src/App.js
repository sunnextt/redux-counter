import React from 'react';
import './App.css';
import Counter from './components/counter';

import {store} from './redux/store';
 console.log(store.getState());

const action = type => store.dispatch({ type })

// const value={store.getState()]}


function App() {
  return (
    <div>
      <Counter
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />,
    </div>
  )
}

export default App;
