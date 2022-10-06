export const truncate = (str, length = 100) => {
  return str.substring(0, length) + "...";
};
