/* eslint-disable max-len */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faClockFour } from '@fortawesome/free-regular-svg-icons';
import transformDate from '../../utils/transformDate';
import getDuration from '../../utils/getDuration';

function TicketInfo({ ticket }) {
  const { segments, duration } = ticket;
  return (
    <div className="px-6">
      <div className="pt-2">
        {segments[0].departureCity?.caption}
        ,
        {' '}
        {segments[0].departureAirport?.caption}
        {' '}
        <span className="text-blue-400">
          (
          {segments[0].departureAirport.uid}
          )
        </span>
        <FontAwesomeIcon icon={faArrowRightLong} className="text-blue-400 px-2" />
        {segments[segments.length - 1].arrivalCity?.caption}
        ,
        {' '}
        {segments[segments.length - 1].arrivalAirport?.caption}
        {' '}
        <span className="text-blue-400">
          (
          {segments[segments.length - 1].arrivalAirport?.uid}
          )

        </span>
      </div>
      <div className="flex justify-between py-4 box-border">
        <div>
          <span className="text-2xl pr-2">
            {transformDate(segments[0].departureDate, 'HH:mm')}
          </span>
          <span className="text-blue-400">
            {transformDate(segments[0].departureDate, 'DD MMM, dd')}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faClockFour} className="px-2" />
          <span>{getDuration(duration)}</span>
        </div>
        <div>
          <span className="text-2xl pr-2">
            {transformDate(segments[segments.length - 1].arrivalDate, 'HH:mm')}
          </span>
          <span className="text-blue-400">
            {transformDate(segments[segments.length - 1].arrivalDate, 'DD MMM, dd')}
          </span>
        </div>
      </div>
      <div className="relative mx-8 border-b-2 border-regal-gray w-[600] box-border">
        {segments.length - 1 > 0
          ? (
            <div className="absolute inset-x-0 -top-3 left-[40%] text-center text-regal-yellow z-10 bg-white w-[20%]">
              {segments.length - 1}
              {' '}
              пересадка
            </div>
          )
          : (
            <div className="absolute inset-x-0 -top-3 left-[40%] text-center text-regal-yellow z-10 bg-white w-[20%] invisible">
              {segments?.length}
              {' '}
              пересадка
            </div>
          )}
      </div>
      <p className="pt-4 pb-3">
        Рейс выполняет:
        <span className="pl-2">{segments[0].airline.caption}</span>
      </p>
    </div>
  );
}

export default TicketInfo;
