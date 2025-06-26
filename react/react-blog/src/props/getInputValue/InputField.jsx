import { useState } from "react";

const InputField = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <h1>Get Input Feild Value</h1>

      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter User name"
      />

      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear Input</button>
    </div>
  );
};
export default InputField;
