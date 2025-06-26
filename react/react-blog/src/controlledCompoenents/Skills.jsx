import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    // console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <div>
      <h1>Select your skills</h1>
      <label htmlFor="php">
        <input onChange={handleSkills} type="checkbox" id="php" value="Java" />
        Java
      </label>
      <br />
      <br />
      <label htmlFor="JS">
        <input onChange={handleSkills} type="checkbox" id="JS" value="JS" />
        JS
      </label>
      <br />
      <br />
      <label htmlFor="HTML">
        <input onChange={handleSkills} type="checkbox" id="HTML" value="HTML" />
        HTML
      </label>
      <br />
      <br />
      <label htmlFor="CSS">
        <input onChange={handleSkills} type="checkbox" id="CSS" value="CSS" />
        CSS
      </label>

      <h1>{skills.toString()}</h1>
    </div>
  );
};
export default Skills;
