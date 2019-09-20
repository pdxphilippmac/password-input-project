import React from "react";
import Walk from "../icons/Walk";
import Euro from "../icons/Euro";

import IconButton from "../components/IconButton";

export default {
  title: "IconButton"
};

export const WalkInactive = () => (
  <IconButton>
    <Walk />
  </IconButton>
);

export const EuroInactive = () => (
  <IconButton>
    <Euro />
  </IconButton>
);
