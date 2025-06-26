import { useEffect, useState } from "react";

const ClockTime = ({ color }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "#000",
          width: "350px",
          padding: "10px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        {time}
      </h1>
    </div>
  );
};
export default ClockTime;
