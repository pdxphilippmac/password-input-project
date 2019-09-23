import React from "react";
import Details from "../components/Details";
import Walk from "../icons/Walk";

import Euro from "../icons/Euro";

export default {
  title: "Details"
};
export const Distance = () => (
  <Details>
    <Walk />
    &nbsp;5 min
  </Details>
);

export const PriceLow = () => (
  <Details>
    <Euro unMarked={false} />
    <Euro unMarked={true} />
    <Euro unMarked={true} />
  </Details>
);
export const PriceMedium = () => (
  <Details>
    <Euro unMarked={false} />
    <Euro unMarked={false} />
    <Euro unMarked={true} />
  </Details>
);
export const PriceHigh = () => (
  <Details>
    <Euro unMarked={false} />
    <Euro unMarked={false} />
    <Euro unMarked={false} />
  </Details>
);
