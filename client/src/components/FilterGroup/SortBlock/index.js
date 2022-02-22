import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/flights';

function SortBlock() {
  const dispatch = useDispatch();

  const handlerSortByAscendingPrice = (e) => {
    dispatch(actions.sortByAscendingPrice());
  };

  const handlerSortByDescentPrice = (e) => {
    dispatch(actions.sortByDescentPrice());
  };

  const handlerSortByDurationTime = (e) => {
    dispatch(actions.sortByDurationTime());
  };

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
          onClick={handlerSortByAscendingPrice}
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
          onClick={handlerSortByDescentPrice}
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
          onClick={handlerSortByDurationTime}
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
