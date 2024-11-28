import React, { useState } from "react";

const CheckBox = () => {

  const [checked, setChecked] = useState([]);

  const handleCheckBox = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      setChecked([...checked, event.target.value]);
    } else {
    //   setChecked(checked.filter((item) => item != event.target.checked))
      setChecked(checked.filter((item) => item !== event.target.value));
    }
  };

  return (
    <div>
      <input type="checkbox" id="php" onChange={handleCheckBox} value={"php"} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <br />

      <input
        type="checkbox"
        id="node"
        onChange={handleCheckBox}
        value={"node"}
      />
      <label htmlFor="node">NODE JS</label>

      <br />
      <br />
      <br />

      <input
        type="checkbox"
        id="javascript"
        onChange={handleCheckBox}
        value={"javascript"}
      />
      <label htmlFor="node">JavaScript</label>

      <br />
      <br />
      <br />

      <input
        type="checkbox"
        id="java"
        onChange={handleCheckBox}
        value={"java"}
      />
      <label htmlFor="node">JAVA</label>

      <h1>{checked}</h1>
    </div>
  );
};

export default CheckBox;
