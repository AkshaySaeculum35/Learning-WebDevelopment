import { useState } from "react";
import Skills from "./Skills";

const Controlled = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("noida");

  //form submit handler
  //   return (
  //     <div>
  //       <h1>Controller Component</h1>
  //       <form action="" method="get">
  //         <br />
  //         <br />
  //         <input
  //           value={name}
  //           type="text"
  //           onChange={(event) => setName(event.target.value)}
  //           placeholder="Enter Name"
  //         />
  //         <br />
  //         <br />
  //         <input
  //           value={password}
  //           type="password"
  //           onChange={(event) => setPassword(event.target.value)}
  //           placeholder="Enter Password"
  //         />
  //         <br />
  //         <br />
  //         <input
  //           value={email}
  //           type="text"
  //           onChange={(event) => setEmail(event.target.value)}
  //           placeholder="Enter Email"
  //         />
  //         <br />
  //         <br />
  //         <button>Submit</button>
  //         <button
  //           onClick={() => {
  //             setEmail("");
  //             setName("");
  //             setPassword("");
  //           }}
  //         >
  //           Clear
  //         </button>
  //         <h3>{name}</h3>
  //         <h3>{password}</h3>
  //         <h3>{email}</h3>
  //       </form>
  //     </div>
  //   );

  //checkbox
  //   return (
  //     <div>
  //       <h1>handle checkboxes</h1>
  //       <Skills />
  //     </div>
  //   );

  return (
    <div>
      <h1>handle radio and dropdown</h1>
      <h1>Select gender</h1>
      <input
        onChange={(event) => setGender(event.target.value)}
        value={"male"}
        checked={gender == "male"}
        type="radio"
        name="gender"
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        onChange={(event) => setGender(event.target.value)}
        value={"female"}
        checked={gender == "female"}
        type="radio"
        name="gender"
        id="female"
      />
      <label htmlFor="female">Female</label>

      <h1>Selected gender: {gender}</h1>
      <br />
      <br />
      <br />

      <h1>Select City:</h1>
      <select name="" id="" onChange={(event) => setCity(event.target.value)}>
        <option value="noida">Noida</option>
        <option value="indore">Indore</option>
        <option value="bhopal">Bhopal</option>
      </select>
      <h2>Selected City: {city}</h2>
    </div>
  );
};
export default Controlled;
