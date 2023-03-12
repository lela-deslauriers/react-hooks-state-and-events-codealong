import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  return <button onClick={handleClick}>{isOn ? "ON" : "FALSE"}</button>;
}

export default Toggle;
