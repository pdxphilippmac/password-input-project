import React from "react";

import RatingUpperbox from "../components/RatingUpperbox";
import ModalCard from "../components/Modal";
import UpperBox from "./RatingUpperbox";

export default function UpperRating() {
  return (
    <ModalCard>
      <UpperBox>
        <RatingUpperbox />
      </UpperBox>
    </ModalCard>
  );
}
