export const dateToPersian = (date) => {
  const readbleDate = `${date?.year}/${date?.month}/${date?.day}`;
  return readbleDate;
};
