import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/flights';

function FilterByPrice() {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const onChangeValue = (e) => {
    if (e.target.name === 'min-price') {
      setMinPrice(e.target.value);
    }
    if (e.target.name === 'max-price') {
      setMaxPrice(e.target.value);
    }
  };

  const filterByMinPriceHandler = () => {
    console.log(minPrice);
    dispatch(actions.filterByMinPrice(minPrice));
  };
  const filterByMaxPriceHandler = () => {
    dispatch(actions.filterByMaxPrice(maxPrice));
  };

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
          onBlur={filterByMinPriceHandler}
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
          onBlur={filterByMaxPriceHandler}
        />
      </div>
    </div>
  );
}

export default FilterByPrice;
