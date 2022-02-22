import * as types from '../type/flights';

export const initFlights = (payload) => ({
  type: types.INIT_FLIGHTS,
  payload,
});

export const sortByAscendingPrice = () => ({
  type: types.SORT_BY_ASCENDING_PRICE,
});

export const sortByDescentPrice = () => ({
  type: types.SORT_BY_DESCENT_PRICE,
});

export const sortByDurationTime = () => ({
  type: types.SORT_BY_DURATION_TIME,
});

export const filterWithTransfer = (payload) => ({
  type: types.FILTER_WHITH_TRANSFER,
  payload,
});

export const filterByMinPrice = (payload) => ({
  type: types.FILTER_BY_MIN_PRICE,
  payload,
});

export const filterByMaxPrice = (payload) => ({
  type: types.FILTER_BY_MAX_PRICE,
  payload,
});

export const filterByAirline = (payload) => ({
  type: types.FILTER_BY_AIRLINE,
  payload,
});
