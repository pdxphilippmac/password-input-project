import React from "react";
import Walk from "../icons/Walk";

import IconButton from "../components/IconButton";

export default {
  title: "IconButton"
};

export const Inactive = () => (
  <IconButton>
    <Walk />
  </IconButton>
);

export const Active = () => (
  <IconButton>
    <Walk />
  </IconButton>
);
