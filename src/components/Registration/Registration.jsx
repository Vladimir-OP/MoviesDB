import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  MainRegistration,
  RegisterCont,
  TitleRegister,
  RegisterInputName,
  RegisterBtn,
  RegisterInput,
} from "./Registration.style";

/**
 * Registrate user
 * @returns {component}
 */
const Registration = () => {
  // keep email data
  const [email, setEmail] = useState();
  // keep username data
  const [username, setUsername] = useState();
  // keep password data
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };
    try {
      const { status } = await axios
        .post("http://localhost:3001/register", data)
        .catch((err) => {
          console.error(err);
        });
      if (status == 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainRegistration>
      <RegisterCont onSubmit={onSubmit}>
        <TitleRegister>Registration</TitleRegister>
        <RegisterInputName>Username</RegisterInputName>
        <RegisterInput
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          name="username"
        />
        <RegisterInputName>Email</RegisterInputName>
        <RegisterInput
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <RegisterInputName>Password</RegisterInputName>
        <RegisterInput
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <RegisterBtn type="submit">Register</RegisterBtn>
      </RegisterCont>
    </MainRegistration>
  );
};

export default Registration;
