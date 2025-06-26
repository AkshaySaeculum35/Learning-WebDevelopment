import { useEffect } from "react";

// const Counter = ({ count, data }) => {
//   const handleCounter = () => {
//     console.log("handleCounter called");
//   };

//   const handleData = () => {
//     console.log("handleData called");
//   };

//   useEffect(() => {
//     handleCounter();
//   }, []);

//   useEffect(() => {
//     handleData();
//   }, [data, count]);

//   //   handleCounter();

//   return (
//     <div>
//       <h1>Counter value {count}</h1>
//       <h1>Data value {data}</h1>
//     </div>
//   );
// };

const Counter = ({ count, data }) => {
  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    console.log("update phase only");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Unmount phase only");
    };
  }, []);

  return (
    <div>
      <h1>Counter Value {count}</h1>
      <h1>Data Value {data}</h1>
    </div>
  );
};
export default Counter;
