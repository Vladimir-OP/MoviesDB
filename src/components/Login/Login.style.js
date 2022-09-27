import styled from "styled-components";

const LoginMain = styled.div`
  background: #0e233f;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
`;
const RegistrationBtn = styled.button`
  background: #0e233f;
  color: white;
  border-radius: 0.3rem;
  margin-right: 1rem;
  display: flex;
  bottom: 24rem;
  left: 62rem;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  cursor: pointer;
  align-self: flex-end;
`;
const LoginCont = styled.form`
  display: flex;
  width: 35rem;
  height: 35rem;
  color: #0e233f;
  background-color: white;
  margin-top: 10rem;
  margin-left: 42rem;
  box-shadow: 1px 1px 8px #e3e3e3;
  border-radius: 0.7rem;
  flex-direction: column;
`;

const TitleLogin = styled.h1`
  color: #0e233f;
  margin-left: 15rem;
  margin-bottom: 3rem;
`;

const LoginInputName = styled.label`
  color: steelblue;
  display: block;
  margin-left: 5rem;
  margin-top: 2rem;
`;

const LoginInput = styled.input`
  width: 25rem;
  height: 2.5rem;
  margin: 0.25rem 0;
  padding: 0 0.5rem;
  font-size: 1rem;
  background-color: #cbc8c8;
  border: none;
  margin-left: 5rem;

  :focus {
    outline: none !important;
  }
`;
const LoginBtn = styled.button`
  background: #0e233f;
  color: white;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 2rem;
  margin-right: 4rem;
`;
export {
  LoginBtn,
  LoginMain,
  LoginCont,
  TitleLogin,
  LoginInputName,
  LoginInput,
  RegistrationBtn,
  Buttons,
};
