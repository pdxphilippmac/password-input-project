import React, { useState } from "react";

function getInputStyle(passwordLength) {
  let hue = 0 + passwordLength * 11;
  if (hue < 124) {
    return {
      backgroundColor: `hsl(${hue}, 100%, 50%)`
    };
  } else if ((passwordLength = 10)) {
    let hue = "124";
    return { backgroundColor: `hsl(${hue}, 100%, 62%)` };
  }

  const inputStyle = {
    backgroundColor: "hsl(2, 100%, 10%)"
  };

  return inputStyle;
}

function PasswordInput() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        style={getInputStyle(password.length)}
        className="password-input"
        type="password"
        maxLength="20"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <p>Password Length:{password.length}</p>
      <p>Password: {password} </p>
    </div>
  );
}

export default PasswordInput;
