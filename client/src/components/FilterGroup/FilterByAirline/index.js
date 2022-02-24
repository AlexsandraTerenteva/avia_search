/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setAirlineStatus from '../../../utils/setAirlineStatus';
import { useFilterContext } from '../../../context/filters';
import * as actions from '../../../redux/actions/flights';

function FilterByAirline() {
  const { initial: data } = useSelector((state) => state.flights);
  const { flights } = useSelector((state) => state.flights);
  const { addFilter, filters } = useFilterContext();
  const [filter, setFiltres] = useState([]);
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.target.checked
      ? setFiltres((prev) => [...prev, e.target.name])
      : setFiltres((prev) => prev.filter((item) => item !== e.target.name));
    };

    useEffect(() => {
      addFilter({ airline: filter });
    }, [filter]);

    useEffect(() => {
      dispatch(actions.filterFlights(filters));
  }, [filters]);

  return (
    <div className="pb-6">
      <p className="pb-4">Авиакомпании</p>
      {data && setAirlineStatus(data, flights).map((item, index) => (
        <div key={item[0]}>
          <input
            type="checkbox"
            id={index}
            name={item[0]}
            className="cursor-pointer"
            onChange={onChange}
            disabled={item[2]}
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
