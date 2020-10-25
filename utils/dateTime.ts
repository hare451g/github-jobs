import differenceInDays from 'date-fns/differenceInDays';

/**
 * parse date
 * @param dateString - string of date, ex: Fri Oct 16 19:11:53 UTC 2020
 * */
const getDifferenceDate = (dateString: string) =>
  `${differenceInDays(Date.now(), new Date(dateString))} days ago`;

export { getDifferenceDate };
