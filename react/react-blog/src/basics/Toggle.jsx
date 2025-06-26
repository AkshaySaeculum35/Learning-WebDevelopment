import { useState } from "react";

const Toggle = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Toggle in react js</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h1>Akshay Gupta</h1> : <h1>No user found</h1>}

      {/* if seperate Component of user name */}
      {/* {display ? <User /> : null} */}
    </>
  );
};
export default Toggle;
