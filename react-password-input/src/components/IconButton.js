//width:60px, height:60px, background-color:white, border-radius:10px, padding:14px or 7px?, color:#547FB3, box-shadow:black, 16%, flexbox: center;
//case button selected/active: color and background inverted.

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 60px;
  width: 60px;
  background-color: white;
  border-radius: 10px;
  fill: #547fb3;
  padding: 14px;
  box-shadow: 0px 4px 6px black;
`;

export default function IconButton({ children }) {
  return <Button>{children}</Button>;
}
