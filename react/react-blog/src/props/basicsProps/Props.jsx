import { useState } from "react";
import College from "./College";
import Student from "./Student";
import User from "./User";

function Props() {
  //   let name = "akshay gupta";
  let userObject = {
    name: "Akshay Gupta",
    age: 25,
    occupation: "Software Engineer",
  };
  let userObject2 = {
    name: "Ashu",
    age: 20,
    occupation: "Manager",
  };

  let collegeNames = ["IIT", "NIT", "JIT"];
  const [student, setStudent] = useState();

  return (
    <div>
      <h1>Props in React js</h1>
      {/* <College names={collegeNames} /> */}
      {student && <Student name={student} />}
      <button onClick={() => setStudent("akshay gupta")}>Update Name</button>

      {/* with variables */}
      {/* <User name={name} age={22} email="akshay@gmail.com" /> */}

      {/* with object */}
      {/* <User user={userObject} />
      <User user={userObject2} /> */}
    </div>
  );
}
export default Props;
