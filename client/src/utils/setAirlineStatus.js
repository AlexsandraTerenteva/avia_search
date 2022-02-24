/* eslint-disable no-prototype-builtins */
import filterAirlines from './filterAirlines';

function setAirlineStatus(initialData, activeData) {
  const initialAirline = filterAirlines(initialData);
  const activeAirline = filterAirlines(activeData);
  const data = Object.entries(initialAirline).map((airline) => {
    if (activeAirline.hasOwnProperty(airline[0])) {
      return [...airline, false];
    }
    return [...airline, true];
  });
  return data;
}

export default setAirlineStatus;
