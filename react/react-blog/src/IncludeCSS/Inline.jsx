import { useState } from "react";

const Inline = () => {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });
  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Inline Style in react js</h1>
      <button onClick={() => updateTheme("#aaa", "green")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle</button>
      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Inline;
