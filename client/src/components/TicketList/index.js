import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TicketItem from '../TicketItem';

function TicketList() {
  const data = useSelector((state) => state.flights);
  const filterData = useSelector((state) => state.filters);
  const [flights, setFlights] = useState(data);

  useEffect(() => {
    setFlights(data);
  }, [data]);

  useEffect(() => {
    if (filterData?.length > 1) {
      setFlights(filterData);
    }
  }, [filterData]);

  return flights?.map((flight, index) => (
    <TicketItem key={String(index)} flight={flight} />
  ));
}

export default TicketList;
