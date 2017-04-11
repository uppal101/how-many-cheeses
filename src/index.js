import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import  rootReducer from './reducers/RootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';


// const composeStoreWithMiddleware = applyMiddleware( promiseMiddleware())(createStore);
// const store = composeStoreWithMiddleware(rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
   applyMiddleware(promiseMiddleware())
 ));

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
);

if(module.hot) {
 module.hot.accept()
}
