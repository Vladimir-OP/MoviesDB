const baseUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/";
const apikey = "6d8fd34d02fc9cbc871ec10f0bf6c8d1";
// take background image using imageID
export const getBackgroundImage = (imageId) => {
  const response = baseUrl + imageId;

  return response;
};

// take other information about movie
export const getOtherInfoAboutMovie = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`
  );
  return await response.json();
};
