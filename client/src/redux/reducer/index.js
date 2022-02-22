import * as types from '../type/flights';

function rootReducer(state = {}, actions) {
  const { type, payload } = actions;

  switch (type) {
    case types.INIT_FLIGHTS: {
      let newState = { ...state };
      newState = payload;
      return newState;
    }
    case types.SORT_BY_DESCENT_PRICE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.flights = newState.flights.sort((a, b) => (
        +b.flight.price.total.amount - +a.flight.price.total.amount
      ));
      return newState;
    }
    case types.SORT_BY_ASCENDING_PRICE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.flights = newState.flights.sort((a, b) => (
        +a.flight.price.total.amount - +b.flight.price.total.amount
      ));
      return newState;
    }
    case types.SORT_BY_DURATION_TIME: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.flights = newState.flights.sort((a, b) => (
        (a.flight.legs[0].duration + a.flight.legs[1].duration)
        - (b.flight.legs[0].duration + b.flight.legs[1].duration)
      ));
      return newState;
    }

    case types.FILTER_WHITH_TRANSFER: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.filters = newState.flights.filter((flight) => (
        payload.includes(
          String(
            (flight.flight.legs[0].segments.length + flight.flight.legs[1].segments.length) - 2,
          ),
        )
      ));
      return newState;
    }

    case types.FILTER_BY_MIN_PRICE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.flights = newState.flights.filter((flight) => (
        flight.flight.price.total.amount >= +payload
      ));
      return newState;
    }
    case types.FILTER_BY_MAX_PRICE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.flights = newState.flights.filter((flight) => (
        flight.flight.price.total.amount <= +payload
      ));
      return newState;
    }
    case types.FILTER_BY_AIRLINE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.filters = newState.flights.filter((flight) => (
        payload.includes(flight.flight.carrier.caption)
      ));
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
