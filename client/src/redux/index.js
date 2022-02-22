import { createStore } from 'redux';
import rootReducer from './reducer';
import data from '../flights.json';

const initialState = {
  flights: data.result.flights,
  filters: null,
};

const store = createStore(rootReducer, initialState);

export default store;
