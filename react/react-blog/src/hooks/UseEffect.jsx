import { useEffect, useState } from "react";
import Counter from "./Counter";

// const UseEffect = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     // callOnce();
//     counterFunction();
//   }, [counter, data]);

//   useEffect(() => {
//     callOnce();
//   }, []);

//   function counterFunction() {
//     console.log("Counter Function", counter);
//   }

//   function callOnce() {
//     console.log("callOnce function Effect called");
//   }
//   return (
//     <div>
//       <h1>useEffect Hook</h1>
//       <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
//       <button onClick={() => setData(data + 1)}>Counter {data}</button>
//     </div>
//   );
// };

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>handle Props side Effect with useEffect in compenent</h1>

      {display ? <Counter count={count} data={data} /> : null}
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
};
export default UseEffect;
