import TicketInfo from '../TicketInfo';

function TicketItem({ flight }) {
  const {
    carrier, legs, seats, exchange,
  } = flight.flight;
  const { total } = flight.flight.price;
  const airlineLogoPath = `http://pics.avs.io/80/50/${carrier?.airlineCode}.png`;

  return (
    <div className="mb-6">
      <div className="flex justify-between px-3 bg-regal-blue text-white">
        <div>
          <img src={airlineLogoPath} alt={carrier.caption} />
        </div>
        <div className="text-right">
          <div className="text-2xl">
            {total.amount}
            {' '}
            &#8381;
          </div>
          <p className="text-xs">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <TicketInfo ticket={legs[0]} />
      <hr className="border-regal-blue border" />
      <TicketInfo ticket={legs[1]} />
      <button type="button" className="min-w-[100%] p-2 bg-regal-yellow text-white">Выбрать</button>
    </div>
  );
}

export default TicketItem;
