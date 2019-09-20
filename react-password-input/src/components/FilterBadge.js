import React from "react";
import styled from "styled-components";

const BadgeButton = styled.button`
  background-color: white;
  border-radius: 10px;
  padding: 8px;
  color: #547fb3;
  box-shadow: 0px 4px 6px rgba(0, 0, 0.15);
`;

export default function Badge({ children }) {
  return <BadgeButton>{children}</BadgeButton>;
}
