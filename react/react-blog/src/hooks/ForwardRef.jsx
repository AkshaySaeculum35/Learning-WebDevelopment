import { useRef } from "react";
import UserInput from "./UserInput";

const ForwardRef = () => {
  const inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "green";
  };
  return (
    <div>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Update Input Ref</button>
    </div>
  );
};
export default ForwardRef;
