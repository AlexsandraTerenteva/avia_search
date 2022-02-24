import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useFilterContext } from '../../../context/filters';
import * as actions from '../../../redux/actions/flights';

function FilterByTransfer() {
  const { addFilter, filters } = useFilterContext();
  const [filter, setFiltre] = useState([]);
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.target.checked
      ? setFiltre((prev) => [...prev, e.target.value])
      : setFiltre((prev) => prev.filter((item) => item !== e.target.value));
  };

  useEffect(() => {
    addFilter({ transfer: filter });
  }, [filter]);

  useEffect(() => {
    dispatch(actions.filterFlights(filters));
  }, [dispatch, filters]);

  return (
    <div className="pb-6">
      <p className="pb-4">Фильтровать</p>
      <div>
        <input
          type="checkbox"
          id="transfer"
          name="transfer"
          value="1"
          className="cursor-pointer"
          onChange={onChange}
        />
        <label
          htmlFor="transfer"
          className="pl-3 cursor-pointer"
        >
          1 пересадка
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="without-transfer"
          name="without-transfer"
          value="0"
          className="cursor-pointer"
          onChange={onChange}
        />
        <label
          htmlFor="without-transfer"
          className="pl-3 cursor-pointer"
        >
          без пересадок
        </label>
      </div>
    </div>
  );
}

export default FilterByTransfer;
