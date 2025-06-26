function Todo() {
  function callFun() {
    alert("function called");
  }
  return (
    <div>
      <h1>Akshay</h1>
      <img src="" alt="" />
      <ul>
        <li>Event1</li>
        <li>Event1</li>
        <li>Event1</li>
      </ul>
      <button onClick={callFun}>Click me</button>
    </div>
  );
}

export default Todo;
