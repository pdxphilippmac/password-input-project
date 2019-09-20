import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: #547fb3 solid 2px;
  border-radius: 5px;
  color: #707070;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  opacity: 0.5;
  padding: 10px;
`;

export default function DefaultInput() {
  const [password, setPassword] = React.useState("");
  return <TextInput value={password} onChange={setPassword} />;
}

export const InitialValueInput = () => {
  const [password, setPassword] = React.useState(
    "Bitte Restaurantnamen eingeben"
  );
  return <TextInput value={password} onChange={setPassword} />;
};
