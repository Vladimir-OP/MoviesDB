import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { MoviesContext } from "../../contexts/moviesContext";
import {
  LoginMain,
  LoginCont,
  TitleLogin,
  LoginInputName,
  RegistrationBtn,
  Buttons,
  LoginInput,
  LoginBtn,
} from "./Login.style";
/**
 * login user to his account
 * @returns {component}
 */
const Login = () => {
  const navigate = useNavigate();
  // keep email data
  const [email, setEmail] = useState();
  // keep password date
  const [password, setPassword] = useState();
  // keep wrong email data
  const [showWrongEmail, setShowWrongEmail] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post("http://localhost:3001/login", userData)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        navigate("/main");
      })
      .catch((err) => {
        console.error(err);
        setShowWrongEmail((prev) => !prev);
      });
  };
  return (
    <LoginMain>
      <LoginCont onSubmit={onSubmit}>
        <TitleLogin>Login</TitleLogin>
        <LoginInputName>Email</LoginInputName>
        <LoginInput
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInputName>Password</LoginInputName>
        <LoginInput
          type="password"
          name="email"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Buttons>
          <RegistrationBtn
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </RegistrationBtn>
          <LoginBtn type="submit">Login</LoginBtn>
        </Buttons>
      </LoginCont>
    </LoginMain>
  );
};

export default Login;
