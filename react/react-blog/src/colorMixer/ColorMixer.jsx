import { useState } from "react";

const ColorMixer = () => {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [r, setR] = useState((colors && colors.r) || 0);
  const [g, setG] = useState((colors && colors.g) || 0);
  const [b, setB] = useState((colors && colors.b) || 0);

  const save = () => {
    localStorage.setItem("color", JSON.stringify({ r, g, b }));
    alert("Color saved.");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-10">
      <h1>Color Mixer</h1>

      <div
        style={{
          backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
          height: "200px",
          width: "200px",
        }}
      ></div>

      <div>
        <label htmlFor="">Red</label>
        <input
          value={r}
          onChange={(event) => setR(event.target.value)}
          type="range"
          min={0}
          max={255}
        />
        <br />
        <br />
        <label htmlFor="">Green</label>
        <input
          value={g}
          onChange={(event) => setG(event.target.value)}
          type="range"
          min={0}
          max={255}
        />
        <br />
        <br />
        <label htmlFor="">Blue</label>
        <input
          value={b}
          onChange={(event) => setB(event.target.value)}
          type="range"
          min={0}
          max={255}
        />
        <br />
        <br />

        <button onClick={save}>Save Color</button>
      </div>
    </div>
  );
};
export default ColorMixer;
