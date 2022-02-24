/* eslint-disable guard-for-in */
function filterAirlines(data) {
  const obj = {};
  data?.forEach((item) => {
    if (!obj[item.flight.carrier.caption]) {
      obj[item.flight.carrier.caption] = [item.flight.price.total];
    }
    obj[item.flight.carrier.caption].push(item.flight.price.total);
  });

  for (const key in obj) {
    obj[key].sort((a, b) => (a.amount - b.amount));
  }

  return obj;
}

export default filterAirlines;
