import React, { useState } from "react";

const InputFieldValues = () => {
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        type="text"
        style={{
          width: "20rem",
          height: "2rem",
          border: "1px solid blue",
          margin: "1rem",
        }}
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter Your Name"
      />

      <input
        type="text"
        style={{
          width: "20rem",
          height: "2rem",
          border: "1px solid blue",
          margin: "1rem",
        }}
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Your Name"
      />

      <input
        type="text"
        style={{
          width: "20rem",
          height: "2rem",
          border: "1px solid blue",
          margin: "1rem",
        }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Your Name"
      />

      <h1>{val}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>

      <button
        onClick={() => setVal("")}
        style={{
          width: "8rem",
          height: "2rem",
          backgroundColor: "red",
          margin: "1rem",
        }}
      >
        Clear
      </button>

      <button
        onClick={() => setName("")}
        style={{
          width: "8rem",
          height: "2rem",
          backgroundColor: "red",
          margin: "1rem",
        }}
      >
        Clear
      </button>


      <button
        onClick={() => setEmail("")}
        style={{
          width: "8rem",
          height: "2rem",
          backgroundColor: "red",
          margin: "1rem",
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default InputFieldValues;





// import React, { useState } from "react";

// const InputFieldValues = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [submittedData, setSubmittedData] = useState(null);

//     // Function to save data when "Submit" is clicked
//   const handleSubmit = () => {
//     setSubmittedData({ name, email, phone });
//   };

//   const handleClear = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setSubmittedData(null);
//   };

//   return (
//     <div>
//       {/* Name Input */}
//       <input
//         type="text"
//         style={{
//           width: "20rem",
//           height: "2rem",
//           border: "1px solid blue",
//           margin: "1rem",
//         }}
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter Your Name"
//       />

//       {/* Email Input */}
//       <input
//         type="text"
//         style={{
//           width: "20rem",
//           height: "2rem",
//           border: "1px solid blue",
//           margin: "1rem",
//         }}
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//         placeholder="Enter Your Email"
//       />

//       {/* Phone Input */}
//       <input
//         type="text"
//         style={{
//           width: "20rem",
//           height: "2rem",
//           border: "1px solid blue",
//           margin: "1rem",
//         }}
//         value={phone}
//         onChange={(event) => setPhone(event.target.value)}
//         placeholder="Enter Your Phone Number"
//       />

//      {/* Submit button to show entered data */}
//       <button
//         onClick={handleSubmit}
//         style={{
//           width: "8rem",
//           height: "2rem",
//           backgroundColor: "green",
//           margin: "1rem",
//         }}
//       >
//         Submit
//       </button>

//       {/* Display the submitted data when "Submit" is clicked */}
//       <button
//         onClick={handleClear}
//         style={{
//           width: "8rem",
//           height: "2rem",
//           backgroundColor: "red",
//           margin: "1rem",
//         }}
//       >
//         Clear
//       </button>

//       {/* Display Submitted Data */}
//       {submittedData && (
//         <div>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Phone: {submittedData.phone}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputFieldValues;
