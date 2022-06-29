export const dateToPersian = (date) => {
  const readbleDate = `${date?.year}/${date?.month}/${date?.day}`;
  return readbleDate;
};
export const formatData = (date) => {
  const day = date?.slice(date?.length - 2, date?.length);
  const month = date?.slice(date?.length - 4, date?.length - 2);
  const year = date?.slice(0, date?.length - 4);
  return `${year}/${month}/${day}`;
};
