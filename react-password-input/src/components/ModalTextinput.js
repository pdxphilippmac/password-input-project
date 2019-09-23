import React, { useState } from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: #547fb3 solid 2.5px;
  border-radius: 12px;
  color: #707070;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  /* opacity: 0.5; */
  padding: 10px;
  width: 304px;
  border-color: #547fb3;
  /* color: ${props => (props.primary ? "#707070" : "#547fb3")}; */
  
`;

export default function RestaurantInput(onChange, value) {
  const [input, setInput] = useState("");
  let pStyle = {
    color: "#547fb3"
  };
  return (
    <div>
      {" "}
      <p style={pStyle}>Name</p>
      <TextInput
        className="password-input"
        type="text"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
      />
      <p> Input value: {input} </p>
    </div>
  );
}
