import React, { useState } from "react";

export default function Hooks_UseState_() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button> <br />
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button><br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
