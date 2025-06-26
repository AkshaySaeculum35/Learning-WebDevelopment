//not using this
// let count = 0;

// let count = 0;
const Pure = () => {
  return (
    <div>
      <h1>Keeping Components Pure</h1>
      {/* <Counter count={1} />
      <Counter count={2} />
      <Counter count={3} />
      <Counter count={4} /> */}

      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </div>
  );
};

// const Counter = ({ count }) => {
//   return <h1>Counter {count}</h1>;
// };

const Cup = ({ guest }) => {
  let count = guest;
  return (
    <h1>
      We have {count} guest and we have to make {guest} cup of tea
    </h1>
  );
};
export default Pure;
