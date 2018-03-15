export const get_time = (date) => {
  let date1 = new Date(date * 1000);
  return date1.toGMTString();
};