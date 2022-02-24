/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { useState } from 'react';
import TicketList from '../TicketList';
import FilterGroup from '../FilterGroup';

function MainLayout() {
  const [count, setCount] = useState(2);

  const handlerChangeCounttVisibleFlights = () => {
    setCount((prev) => prev += 1);
  };

  return (
    <div className="flex justify-center p-8 space-x-4">
      <FilterGroup />
      <div className="flex flex-col w-[50%]">
        <TicketList count={count} />
        <button
          type="button"
          className="min-w-[100%] p-2 bg-regal-yellow text-white"
          onClick={handlerChangeCounttVisibleFlights}
        >
          Показать еще
        </button>
      </div>
    </div>
  );
}

export default MainLayout;
