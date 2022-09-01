const baseUrl = "https://api.themoviedb.org/3";
const apikey = "6d8fd34d02fc9cbc871ec10f0bf6c8d1";

const getPathUrlWithKey = (path) =>
  `${baseUrl}${path}${path.includes("?") ? "&" : "?"}api_key=${apikey}`;

const getMovies = async (page = 1, sortBy = null) => {
  const response = await fetch(
    getPathUrlWithKey(
      `/discover/movie?page=${page}${sortBy ? `&sort_by=${sortBy}` : ""}`
    )
  );
  return await response.json();
};

export default getMovies;
