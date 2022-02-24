import * as types from '../type/flights';

function rootReducer(state = {}, actions) {
  const { type, payload } = actions;
  switch (type) {
    case types.INIT_FLIGHTS: {
      let newState = { ...state };
      newState = payload;
      return newState;
    }
    case types.FILTER_FLIGHTS: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.flights.flights = newState.flights.initial;

      if (payload.price) {
        newState.flights.flights = newState.flights.flights.filter((flight) => (
          +flight.flight.price.total.amount >= payload.price.minPrice
          && +flight.flight.price.total.amount <= payload.price.maxPrice
        ));
      }
      if (payload.transfer && payload.transfer?.length > 0) {
        newState.flights.flights = newState.flights.flights.filter((flight) => (
          payload.transfer.includes(
            String(
              (flight.flight.legs[0].segments.length + flight.flight.legs[1].segments.length) - 2,
            ),
          )
        ));
      }
      if (payload.airline && payload.airline?.length > 0) {
        newState.flights.flights = newState.flights.flights.filter((flight) => (
          payload.airline.includes(flight.flight.carrier.caption)
        ));
      }
      if (payload.sort && payload.sort === 'ascending-price') {
        newState.flights.flights = newState.flights.flights.sort((a, b) => (
          +a.flight.price.total.amount - +b.flight.price.total.amount
        ));
      }

      if (payload.sort && payload.sort === 'descending-price') {
        newState.flights.flights = newState.flights.flights.sort((a, b) => (
          +b.flight.price.total.amount - +a.flight.price.total.amount
        ));
      }

      if (payload.sort && payload.sort === 'duration') {
        newState.flights.flights = newState.flights.flights.sort((a, b) => (
          (a.flight.legs[0].duration + a.flight.legs[1].duration)
              - (b.flight.legs[0].duration + b.flight.legs[1].duration)
        ));
      }

      return newState;
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
