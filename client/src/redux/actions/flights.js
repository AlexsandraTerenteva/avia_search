import * as types from '../type/flights';

export const initFlights = (payload) => ({
  type: types.INIT_FLIGHTS,
  payload,
});

export const filterFlights = (payload) => ({
  type: types.FILTER_FLIGHTS,
  payload,
});
