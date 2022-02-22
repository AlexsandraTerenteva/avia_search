import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import filterAirlines from '../../../utils/filterAirlines';
import * as actions from '../../../redux/actions/flights';

function FilterByAirline() {
  const airline = useSelector((state) => state.flights);
  const airlineFilters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [airlineCaption, setAirlineCaption] = useState(filterAirlines(airline));
  const [filters, setFiltres] = useState([]);

  const onChange = (e) => {
    e.target.checked
      ? setFiltres((prev) => [...prev, e.target.name])
      : setFiltres((prev) => prev.filter((item) => item !== e.target.name));
  };

  useEffect(() => {
    if (airlineFilters?.length > 0) {
      return setAirlineCaption(filterAirlines(airlineFilters));
    }
    setAirlineCaption(filterAirlines(airline));
  }, [airlineFilters]);

  useEffect(() => {
    dispatch(actions.filterByAirline(filters));
  }, [filters]);

  return (
    <div className="pb-6">
      <p className="pb-4">Авиакомпании</p>
      {Object.entries(airlineCaption).map((item, index) => (
        <div key={item[0]}>
          <input
            type="checkbox"
            id={index}
            name={item[0]}
            className="cursor-pointer"
            onChange={onChange}
          />
          <label
            htmlFor="airline"
            className="pl-3 cursor-pointer"
          >
            {item[0].length > 10
              ? `${item[0].slice(0, 10)}...`
              : item[0]}
            {' '}
            <span className="text-left">
              от
              {' '}
              {item[1][0].amount}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default FilterByAirline;
