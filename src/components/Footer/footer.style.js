import styled from "styled-components";

const FooterCont = styled.footer`
  height: auto;
  width: 100%;
  background-color: rgba(9, 36, 64, 255);
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;

  @media screen and (max-width: 56.25rem) {
    flex-direction: column;
    
  }
`;

const FooterLeft = styled.div`
  display: flex;
  margin-right: 2rem;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 3rem;
  width: 15rem;
  > img {
    padding: unset;
    width: 7.5rem;
    @media screen and (max-width: 56.25rem) {
      display: none;
    }
  }
  > div {
    margin-top: 2rem;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    display: flex;
    border-radius: 0.2rem;
    width: 15.1rem;
    height: 2.6rem;
    background-color: white;
    color: rgba(60, 179, 226, 255);
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media screen and (max-width: 56.25rem) {
    top: 0;
    margin-left:4rem;
  }
`;

const FooterMenu = styled.div`
  margin-right: 2.5rem;
  min-width: 0;
  box-sizing: border-box;
  margin-top: 2rem;

  h3 {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    color: #fff;
    white-space: nowrap;
  }

  ul li {
    line-height: 1.6rem;
    max-width: 16.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-weight: 300;
  }

  @media screen and (max-width: 56.25rem) {
   
    margin-left:4rem;
  }
`;

const MenuItem = styled.div``;
export { FooterCont, FooterLeft, FooterMenu };
