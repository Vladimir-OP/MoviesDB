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

// gives random poster for movie
export const getRandomPosterImage = () => {
  const posters = [
    "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
    "/rUwhgbwn4afF7PFBoQE2BBysFIg.jpg",
    "/h32gl4a3QxQWNiNaR4Fc1uvLBkV.jpg",
    "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
    "/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg",
    "/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
    "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg",
    "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    "/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg",
    "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    "/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg",
  ];
  return posters[Math.floor(Math.random() * posters.length)];
};
