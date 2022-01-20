import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App';
import "./index.css"
// Provider: keep track of store which is a global state and that allows us to acces that store from anywhere inside the app we don't need have to be 
// in exactly in a parent component  pr in a child component we can access that state from ansywhere  


//creating store
const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

