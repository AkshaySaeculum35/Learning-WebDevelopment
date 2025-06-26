import { useState } from "react";

const useToggle = (defaultvalue) => {
  const [value, setvalue] = useState(defaultvalue);

  function toggleValue(val) {
    if (typeof val != "boolean") {
      setvalue(!value);
    } else {
      setvalue(val);
    }
  }
  return [value, toggleValue];
};
export default useToggle;
