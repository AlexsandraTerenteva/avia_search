import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux';
import './index.css';
import App from './App';
import { FilterContextProvider } from './context/filters';

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
