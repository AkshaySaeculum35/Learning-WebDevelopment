function FunctionsTest() {
  function callFun() {
    alert("Hello from callFun");
  }
  const fruit = (apple) => {
    alert(apple);
  };

  return (
    <div>
      <h1>Event and function call</h1>
      {/* without parameter */}
      {/* <button onClick={fruit}>Click me</button> */}

      {/* with parameter */}
      <button
        onClick={() => {
          fruit("Sweet apple");
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default FunctionsTest;
