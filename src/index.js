import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './generator'
import reducers from './reducers/index'

import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter';
import createSagaMiddleware from 'redux-saga'

import { increment,decrement } from './actions/index'

//create saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,
    applyMiddleware(sagaMiddleware))
    
ReactDOM.render(
    <React.StrictMode>
        <Counter value={store.getState()}
          onDecrement={()=> store.dispatch(increment())}
          onIncrement={()=> store.dispatch(decrement())} />         
    </React.StrictMode>,
  document.getElementById('root')
);