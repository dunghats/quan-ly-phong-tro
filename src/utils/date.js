export const convertTime = (milliseconds) => {
  const date = new Date(milliseconds);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};

export const addDays = (milliseconds, daysToAdd) => {
  const date = new Date(milliseconds);
  date.setDate(date.getDate() + daysToAdd);
  return convertTime(date.getTime());
};

export const formatDate = (dateString) => {
  var dateObj = new Date(dateString);
  var year = dateObj.getFullYear();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day;
};
