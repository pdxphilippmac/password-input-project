import React from "react";
import styled from "styled-components";

const CategoryBadges = styled.button`
  background-color: #547fb3;
  border-radius: 10px;
  padding: 8px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0.15);
`;

export default function CategoryBadge({ children }) {
  return <CategoryBadges>{children}</CategoryBadges>;
}
