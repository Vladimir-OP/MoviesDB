const baseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face";

// get imageId from movie and return image
const getImages = (imageId) => {
  const response = baseUrl + imageId;

  return response;
};
export default getImages;
