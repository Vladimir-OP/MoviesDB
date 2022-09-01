import styled from "styled-components";

const MoviesConteiner = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 7rem;
  margin-right: 3rem;
  border-radius: 3rem;
  @media screen and (max-width: 32rem) {
    margin: 0;
    justify-content: space-between;
  }
`;
const MovieCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 11.25rem;
  height: 23rem;
  box-shadow: 2px 2px 16px #e3e3e3;
  background: white;
  border-radius: 0.5rem;
`;
const ImageCont = styled.img`
  height: auto;
  width: 11.25rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const MovieTitle = styled.p`
  padding-left: 0.5rem;
  font-weight: 700;
  max-width: 9rem;
  font-size: 0.9rem;
  margin: 0;
  margin-top: 1.5rem;
  min-height: 2rem;
`;

const MovieDate = styled.p`
  padding-left: 0.5rem;
  font-weight: 200;
  font-size: 0.9rem;
`;

const PopularityIcon = styled.div(({ popularity }) => {
  return `
  display:none`;
  //   const percent = parseInt(popularity, 10);

  //   // 16 is the radius of the circle
  //   const circumference = 16 * 2 * Math.PI;
  //   const offset = circumference - (percent / 100) * circumference;

  //   const color = `rgb(${percent >= 50 ? 200 - (percent - 50) * 4 : 200}, ${
  //     percent <= 50 ? 200 - (50 - percent) * 4 : 200
  //   }, 20)`;

  //   return `
  //   position: relative;
  //   top: -1.188rem;
  //   left: 0..625rem;
  //   z-index: 1;
  //   border-radius: 50%;
  //   background-color: #081c22;
  //   width: 2.375rem;
  //   height: 2.375rem;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  // `;
});

export {
  MoviesConteiner,
  MovieDate,
  ImageCont,
  MovieCont,
  MovieTitle,
  PopularityIcon,
};
