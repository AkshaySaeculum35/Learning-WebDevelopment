import { useState } from "react";
import ClockTime from "./ClockTime";

const Clock = () => {
  const [color, setColor] = useState("green");
  return (
    <div>
      <h1>Digital Clock in reactjs </h1>
      <select name="" id="" onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="white">White</option>
        <option value="orange">Orange</option>
      </select>
      <ClockTime color={color} />
    </div>
  );
};
export default Clock;
