const baseUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/";

export const getBackgroundImage =  (imageId) => {
    const response = baseUrl + imageId;
  
    return response;
  };