import moment from "moment";

export const GetFormatedDate = (date) => {
  const m = moment(date, "YYYY-MM-DD");
  if (!date) return "";
  return m.format("L");
};
// get relase date of movie and format it into usual form
export const GetDate = (date, getFullyYear) => {
  const m = moment(date, "YYYY-MM-DD");
  if (!date) return "";
  if (getFullyYear) {
    return m.format("YYYY");
  } else {
    return m.format("L");
  }
};
// convert minutes into hours and minutes format
export const MinuteConvert = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = (num / 60 - hours) * 60;
  const Roundedminutes = Math.round(minutes);
  return hours + "h " + Roundedminutes + "m";
};

// make coorect format for movie relase date in main page
export const customizeDate = (dateString) => {
  const m = moment(dateString, "YYYY-MM-DD");
  return m.format("ll");
};
