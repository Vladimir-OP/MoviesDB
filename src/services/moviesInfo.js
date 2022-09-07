const baseUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/";
const apikey = "6d8fd34d02fc9cbc871ec10f0bf6c8d1";

export const getBackgroundImage = (imageId) => {
  const response = baseUrl + imageId;

  return response;
};

export const getOtherInfoAboutMovie = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`
  );
  return await response.json();
};
