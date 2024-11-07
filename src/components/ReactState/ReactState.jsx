import { useState } from "react";

const ReactState = () => {
  const [fruits, setFruits] = useState("Apple");

  // const Fruits = () => {
  //   setFruits("Orange");
  // };

  return (
    <div>
      <h1>{fruits}</h1>
      <button onClick={()=>setFruits("Orange")} style={{ width: "8rem", height: "2rem", backgroundColor: "red" }}>
        Click Me
      </button>
    </div>
  );
};

export default ReactState;
