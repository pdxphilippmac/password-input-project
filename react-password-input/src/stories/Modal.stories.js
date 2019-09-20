import React from "react";
import ModalCard from "../components/Modal";
import RatingUpperbox from "../components/RatingUpperbox";
import UpperRating from "../components/CardUpper";

export default {
  title: "ModalCard"
};

export const DefaultDialog = () => <ModalCard />;

export const UpperboxRating = () => <RatingUpperbox />;

export const CardUpperPart = () => <UpperRating />;
