import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import data from '../flights.json';

const initialState = {
  flights: {
    initial: data.result.flights,
    flights: data.result.flights,
  },
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
