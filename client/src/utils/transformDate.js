import dayjs from 'dayjs';

const updateLocale = require('dayjs/plugin/updateLocale');

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  monthsShort: [
    'янв', 'фев', 'мaр', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноб', 'дек',
  ],
  months: [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ],
  weekdays: [
    'вс', 'пн', 'вт', 'ср', 'чт', 'пт',
    'сб',
  ],
});

function transformDate(date, format) {
  return dayjs(date).format(format);
}

export default transformDate;
