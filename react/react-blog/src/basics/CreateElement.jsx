import { createElement } from "react";

function CreateElement() {
  const userName = "Akshay Gupta";
  let x = 20;
  //   return (
  //     <>
  //       <h1>{userName}</h1>
  //       <h1>{x}</h1>
  //       <button onClick={() => alert("hello")}>Click</button>
  //     </>
  //   );
  return (
    createElement("div", { id: "rootDiv" }, "Hello div"),
    createElement("h1", { class: "h1Tag" }, "heading")
  );
  return <div className="rootOther">Hello Other</div>;
}

// function App() {
//   const name = "akshay";
//   return (
//     <div>
//       <Todo />
//     </div>
//   );
// }
export default CreateElement;
