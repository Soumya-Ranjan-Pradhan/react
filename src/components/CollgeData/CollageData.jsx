import React from "react";

const CollageData = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
         <div key={index}
          style={{
            backgroundColor: "#ccc",
            padding: "1rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "1rem",
          }}
        >
          <h1>{item.names}</h1>
          <ul>
            <li>{item.city}</li>
            <li>{item.web}</li>

            <h3>Student Data</h3>
            {item.students.map((student, index) => (
             <div key={index}>
              <li>{student.names}</li>
              <li>{student.age}</li>
              <li>{student.email}</li>
             </div>
              
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CollageData;
