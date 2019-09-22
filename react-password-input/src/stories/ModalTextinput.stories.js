import React from "react";
import RestaurantInput from "../components/ModalTextinput";

export default {
  title: "ModalInput"
};

export const withoutProps = () => <RestaurantInput />;

export const Default = () => {
  const [password, setPassword] = React.useState("");
  return <RestaurantInput value={password} onChange={setPassword} />;
};

export const WithInitialValue = () => {
  const [password, setPassword] = React.useState("password123");
  return <RestaurantInput value={password} onChange={setPassword} />;
};
