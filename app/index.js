import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
// import createReducer from './redux/reducers';
import createReducer from './redux/reducers';
import App from './containers/App';
// import App from './components/Loading';

const MOUNT_NODE = document.getElementById('app');
const reducer = createReducer();
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  MOUNT_NODE
);
