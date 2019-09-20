import React from "react";
import styled from "styled-components";
import Star from "../icons/Star";

const RatingUpperbox = styled.div`
  font-size: 24px;
  text-align: center;
  color: #547fb3;
  font-weight: bold;
  /* border: black solid 1px; */
  font-family: "Roboto", sans-serif;
  height: 57px;
`;
const UpperBox = styled.section`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 2px solid black; */
`;

export default function UpperRating() {
  return (
    <>
      <UpperBox>
        <div>
          <Star />
        </div>
        <RatingUpperbox>
          <p>Bewerten Sie Ihre Restaurant-Erfahrung</p>
        </RatingUpperbox>
      </UpperBox>
    </>
  );
}
