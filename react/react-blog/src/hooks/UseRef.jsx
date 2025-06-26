import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const inputHandler = () => {
    //     console.log(inputRef);

    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter name";
    inputRef.current.value = "1234";
  };

  const toggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  const h1Handler = () => {
    h1Ref.current.style.color = "blue";
  };
  return (
    <div>
      <h1>UseRef hook in react</h1>

      <button onClick={toggleHandler}>Toggle</button>

      <input ref={inputRef} type="text" placeholder="Enter user name" />
      <button onClick={inputHandler}>Focus on input field</button>

      <h1 ref={h1Ref}>Hello Akshay</h1>
      <button onClick={h1Handler}>H1 Handler</button>
    </div>
  );
};
export default UseRef;
