function DeclareVariables() {
  const name = "akshay";
  let x = 10;
  let y = 10;

  let path = "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg";
  const userObj = {
    name: "Akshay Gupta",
    email: "akshay@gmail.com",
  };

  const userArray = ["akshay", "gupta", "ashu"];
  function fruit() {
    return "apple";
  }
  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    let result = 0;
    if (op == "+") return a + b;
    else if (op == "-") return a - b;
    else if (op == "*") return a * b;
    else if (op == "/") return a / b;
    else return result;
  }
  return (
    <div>
      <h1>JSX with curly braces</h1>
      <h1>Hello: {name ? name : "user not found"}</h1>
      <h1>Sum: {x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>sum: {sum(23, 23)}</h1>
      <h1>Calculate: {operation(23, 55, "")}</h1>
      <h1>User: {userObj.email}</h1>
      <h1>User: {userArray[0]}</h1>
      <input type="text" value={name} />
      <br />
      <img src={path} alt="" />
    </div>
  );
}
export default DeclareVariables;
