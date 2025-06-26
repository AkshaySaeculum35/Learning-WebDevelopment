function ClickEvent() {
  const [fruit, setFruit] = useState("apple");
  const [count, setCount] = useState("apple");
  const handleFruit = () => {
    setFruit("banana");
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit</button>
      <Counter />
    </div>
  );
}
export default ClickEvent;
