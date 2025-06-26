import { useState, useTransition } from "react";

const UseTransition = () => {
  const [pending, startTransition] = useTransition();

  const handleButton = async () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };
  return (
    <div>
      <h1>useTransition hook in react js 19</h1>
      {pending ? (
        <img
          style={{ width: "100px" }}
          src="https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif"
          alt=""
        />
      ) : null}

      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </div>
  );
};
export default UseTransition;
