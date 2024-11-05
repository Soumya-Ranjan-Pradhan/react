import React from 'react'

const JsxWithCurlyBraces = () => {
      // const myName = "hello";
  // let a = 10;
  // let b = 20;
  // function hello(a, b) {
  //   return a + b;
  // }

  // const userOBJ = {
  //   myName: "Hello",
  //   age: 23,
  //   email: "soumyapradhan63711@gmail.com",
  // };

  const names = "MyName"

  // const names = ["Sum","Peter","Sum1"]
  return (
    <div>
            {/* <h1>Hello World</h1>
      <h1>{myName}</h1>
      <h2>{a + b}</h2>
      <h3>{hello(12,13)}</h3> */}
      {/* <h1>{userOBJ.email}</h1> */}
      <h2>{names[0]}</h2>
      <input type="text" value={names} />
    </div>
  )
}

export default JsxWithCurlyBraces
