import React, { useState, useEffect, useContext } from "react";
import { applicationContext } from "../../../contexts.js";

const Counter = () => {
  const { counter, setCounter } = useContext(applicationContext);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Take</button>
    </div>
  );
};

export default Counter;
