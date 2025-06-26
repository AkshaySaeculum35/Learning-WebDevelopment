import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};
const reducer = (data, action) => {
  //   console.log(data, action);
  return { ...data, [action.type]: action.val };
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, emptyData);

  // console.log(state);

  return (
    <div>
      <h1>useReducer hook in react js</h1>

      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        placeholder="enter name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "password" })
        }
        placeholder="enter password"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        placeholder="enter email"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        placeholder="enter city"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "address" })
        }
        placeholder="enter address"
      />
      <br />
      <br />

      <ul>
        <li>Name:{state.name}</li>
        <li>Password:{state.password}</li>
        <li>Email:{state.email}</li>
        <li>City:{state.city}</li>
        <li>Address:{state.address}</li>
      </ul>

      <button onClick={() => console.log("form submitted")}>Add Details</button>
    </div>
  );
};
export default UseReducer;
