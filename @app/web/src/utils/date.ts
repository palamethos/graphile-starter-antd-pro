import dayjs from 'dayjs';

// ? TODO: refactor @app/lib
// TODO: take locale into account

export const formatDateShort = date => {
  return date ? dayjs(date).format('DD MMM YYYY') : '-';
};

export const formatUnixDateShort = date => {
  return date ? dayjs.unix(date).format('DD MMM YYYY') : '-';
};

export const formatDateLong = date => {
  return date ? dayjs(date).format('YYYY/MM/DD') : '-';
};

export const formatUnixDateLong = date => {
  return date ? dayjs.unix(date).format('YYYY/MM/DD') : '-';
};
