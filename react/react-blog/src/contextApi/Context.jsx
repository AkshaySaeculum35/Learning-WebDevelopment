import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

const Context = () => {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <SubjectContext.Provider value={subject}>
        <select
          value={subject}
          name=""
          id=""
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <h1>Context API</h1>
        <button onClick={() => setSubject("")}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
};
export default Context;
