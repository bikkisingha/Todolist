import React, { useEffect } from "react";

function CustomButton(props) {
  const { result } = props;
  useEffect(() => {
    console.log("result is changed");
  }, [result]);
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default CustomButton;
