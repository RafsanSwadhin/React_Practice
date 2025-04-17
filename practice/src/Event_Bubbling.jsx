import React from "react";

export default function Hooks_UseState_() {
  const handleChildClick = (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the parent
    console.log("Child (Button) Clicked");
  };

  const handleParentClick = (event) => {
    console.log("Parent (Div) Clicked");
  };

  return (
    <div onClick={handleParentClick} style={{ padding: "20px", border: "2px solid black" }}>
      <h1>Welcome</h1>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
  );
}