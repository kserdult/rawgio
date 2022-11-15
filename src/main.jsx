import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//REDUX SETUP
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import gamesReducer from './reducers/gamesReducer';
import thunk from 'redux-thunk';
import detailReducer from './reducers/detailReducer';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
    reducer: {
      games: gamesReducer,
      detail: detailReducer,
    },
    thunk,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
