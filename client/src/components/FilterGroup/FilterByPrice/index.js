import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/flights';
import { useFilterContext } from '../../../context/filters';

function FilterByPrice() {
  const { addFilter, filters } = useFilterContext();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const dispatch = useDispatch();

  const onChangeValue = (e) => {
    const regEx = /\D/gi;
    if (e.target.name === 'min-price') {
      setMinPrice(Number(e.target.value.replace(regEx, '')));
    }
    if (e.target.name === 'max-price') {
      setMaxPrice(Number(e.target.value.replace(regEx, '')));
    }
  };

  const filterByPriceHandler = () => {
    addFilter({ price: { minPrice, maxPrice } });
  };

  useEffect(() => {
    dispatch(actions.filterFlights(filters));
  }, [filters]);

  return (
    <div className="pb-6">
      <p className="pb-4">Цена</p>
      <div className="pb-2">
        <label
          htmlFor="min-price"
          className="pr-3 cursor-pointer"
        >
          От
        </label>
        <input
          type="text"
          id="min-price"
          name="min-price"
          value={minPrice}
          className="border rounded border-current pl-2 cursor-pointer w-40"
          onChange={onChangeValue}
          onBlur={filterByPriceHandler}
        />
      </div>
      <div>
        <label
          htmlFor="max-price"
          className="pr-3 cursor-pointer"
        >
          До
        </label>
        <input
          type="text"
          id="max-price"
          name="max-price"
          value={maxPrice}
          className="border rounded border-current pl-2 cursor-pointer w-40"
          onChange={onChangeValue}
          onBlur={filterByPriceHandler}
        />
      </div>
    </div>
  );
}

export default FilterByPrice;
