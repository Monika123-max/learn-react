import axios from "axios";
import React from "react";

const ChildComponenet = (props) => {
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => props.data(res.data));
  };
  return (
    <>
      <button onClick={getData}>Click</button>
    </>
  );
};
export default ChildComponenet;
