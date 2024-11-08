import React, { useState } from "react";

const Toggle = () => {
  // var names = "sdfdsf"
  // const [display, setDisplay] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <button onClick={() => setDisplay(display)}>Toggle</button>
      <h1>{display ? <h1>Myname</h1> : null}</h1> */}

      <h1>{counter}</h1>
<br />
      <button onClick={() => setCounter(counter + 1)}>Click</button>
<br />
      {counter == 0 ? (
        <h1>Hello</h1>
      ) : counter == 1 ? (
        <h1>Hi</h1>
      ) : counter == 2 ? (
        <h1>Hey</h1>
      ) : counter == 3 ? (
        <h1>Howdy</h1>
      ) : counter == 4 ? (
        <h1>Hiya</h1>
      ) : counter == 5 ? (
        <h1>subha</h1>
      ) : counter == 6 ? (
        <h1>hello</h1>
      ) : (
        "no found user"
      )}

      
    </div>
  );
};

export default Toggle;
