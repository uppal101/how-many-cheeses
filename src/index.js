import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import  rootReducer from './reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';


const composeStoreWithMiddleware = applyMiddleware( promiseMiddleware())(createStore);
const store = composeStoreWithMiddleware(rootReducer);

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
);

if(module.hot) {
 module.hot.accept()
}
