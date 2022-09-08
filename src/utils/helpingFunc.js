// get relase date of movie and format it into usual form
export const GetDate = (date, getFullyYear) => {
  if (!date) return "";
  const year = new Date(date);
  if (getFullyYear) {
    return year.getFullYear().toString();
  } else {
    return year.toLocaleDateString();
  }
};
// convert minutes into hours and minutes format
export const MinuteConvert = (n) => {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
};
