import { useSelector } from 'react-redux';
import TicketItem from '../TicketItem';

function TicketList({ count }) {
  const { flights } = useSelector((state) => state.flights);

  return flights.slice(0, count).map((flight, index) => (
    <TicketItem key={String(index)} flight={flight} />
  ));
}

export default TicketList;
