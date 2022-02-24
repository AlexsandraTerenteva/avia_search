import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFilterContext } from '../../../context/filters';
import * as actions from '../../../redux/actions/flights';

function SortBlock() {
  const { addFilter, filters } = useFilterContext();
  const dispatch = useDispatch();

  const handlerSort = (e) => {
    addFilter({ sort: e.target.value });
  };

  useEffect(() => {
    dispatch(actions.filterFlights(filters));
  }, [filters]);

  return (
    <div className="pb-6">
      <p className="pb-4">Сортировать</p>
      <div>
        <input
          type="radio"
          id="ascending-price"
          name="sort"
          value="ascending-price"
          className="cursor-pointer"
          onClick={handlerSort}
        />
        <label
          htmlFor="ascending-price"
          className="pl-3 cursor-pointer"
        >
          по возрастанию цены
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="descending-price"
          name="sort"
          className="cursor-pointer"
          value="descending-price"
          onClick={handlerSort}
        />
        <label
          htmlFor="descending-price"
          className="pl-3 cursor-pointer"
        >
          по убыванию цены
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="duration"
          name="sort"
          value="duration"
          className="cursor-pointer"
          onClick={handlerSort}
        />
        <label
          htmlFor="duration"
          className="pl-3 cursor-pointer"
        >
          по времени в пути
        </label>
      </div>

    </div>
  );
}

export default SortBlock;
