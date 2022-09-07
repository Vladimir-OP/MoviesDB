export const GetDate = (date, getFullyYear) => {
  if (!date) return "";
  let year = new Date(date);
  if (getFullyYear) {
    return year.getFullYear().toString();
  } else {
    return year.toLocaleDateString();
  }
};

export const MinuteConvert = (n) => {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
};
