const baseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face";

const getImages =  (imageId) => {
  const response = baseUrl + imageId;

  return response;
};
export default getImages;
