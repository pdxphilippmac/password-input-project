import React from "react";
import styled from "styled-components";

const Modal = styled.dialog`
  height: 360px;
  width: 360px;
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  padding: 14px;
  box-shadow: 0px 5px 7px rgb(0, 0, 0, 0.16);
`;

export default function ModalCard() {
  return <Modal open={true}></Modal>;
}
