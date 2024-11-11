import React, { useState } from "react";
// import JsxWithCurlyBraces from "./components/JsxWithCurlyBraces/JsxWithCurlyBraces";
// import ReactState from "./components/ReactState/ReactState";
// import Toggle from "./components/Toogle/Toggle";
import UserComponent from "./components/UserComponets/UserComponent";
import Student from "./components/Student/Student";

const App = () => {
  let MyName = "Hello";
  const BioData = {
    myName: "tushar",
    age: 23,
    email: "soumyapradhan63711@gmail.com",
  };

  const CollegeName = ["IIT", "NIT", "TAT", "SOA", "NIIS"];

  const [student, setStudent] = useState("sdfdsf");

  return (
    <>
      <h1>{student}</h1>


      {student && <Student names={student} />}

      <button
        style={{ width: "100px", height: "50px", backgroundColor: "red" }}
        onClick={() => setStudent("sdfss")}
      >
        changeName
      </button>

      {/* <UserComponent
        names="MyName"
        myName={MyName}
        myBioData={BioData}
        college={CollegeName}
      /> */}
    </>
  );
};

export default App;
