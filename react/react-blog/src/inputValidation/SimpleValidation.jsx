import { useState } from "react";

function SimpleValidation() {
  const [name, setName] = useState();
  const [nameErr, setNameErr] = useState();
  const [password, setPassword] = useState();
  const [passErr, setPassErr] = useState();

  const handleName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 5) {
      setNameErr("Name should be less than 5 characters");
    } else {
      setNameErr();
    }
  };
  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    console.log(event.target.value);
    if (regex.test(event.target.value)) {
      setPassErr();
    } else {
      setPassErr(
        "Password should be less than 5 characters,only numbers and alphabets allowed."
      );
    }
  };
  return (
    <>
      <div>
        <h1>Simple validation in react js</h1>
        <input
          className={
            nameErr ? "border-red-600 border focus:outline-red-400 " : ""
          }
          type="text"
          onChange={handleName}
          placeholder="Enter name"
        />
        <span className="text-red-400 block">{nameErr && nameErr}</span>
        <br />
        <br />
        <input
          className={
            passErr ? "border-red-600 border focus:outline-red-400 " : ""
          }
          type="text"
          onChange={handlePassword}
          placeholder="Enter password"
        />
        <span className="text-red-400 block">{passErr && passErr}</span>
        <br />
        <br />
        <button disabled={nameErr || passErr}>Login</button>
      </div>
    </>
  );
}
export default SimpleValidation;
