import React, { useState } from "react";

const HandleRatioButtonDropDown = () => {
  const [select, setSelected] = useState("");
  const [city, setCity] = useState("noida");

  return (
    <div>
      <h1>Handle Ratio Button and DropDown</h1>
      <br />
      <h4>Select Gender</h4>
      <input
        type="radio"
        name="gender"
        id="male"
        value={"male"}
        onChange={(event) => setSelected(event.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value={"female"}
        onChange={(event) => setSelected(event.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h1>Selected Gender: {select}</h1>

      <br />
      <br />
      <br />

      <h1>Select Rating</h1>
      <select style={{ width: "10rem" }} onChange={(event) => setCity(event.target.value)}  defaultValue={"delhi"} >
        <option value="noida">noida</option>
        <option value="gurgaon">gurgaon</option>
        <option value="delhi">delhi</option>
      </select>

      <h1>Selected City:-{city}</h1>
    </div>
  );
};

export default HandleRatioButtonDropDown;
