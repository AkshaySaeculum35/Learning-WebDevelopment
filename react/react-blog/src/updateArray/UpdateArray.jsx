import { useState } from "react";

const UpdateArray = () => {
  const [data, setData] = useState(["akshay", "sam", "ashu"]);

  const [dataDetails, setDataDetails] = useState([
    { name: "akshay", age: 25 },
    { name: "sam", age: 30 },
    { name: "ashu", age: 35 },
  ]);

  const handleUser = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };
  const handleAge = (age) => {
    dataDetails[dataDetails.length - 1].age = age;
    console.log(dataDetails);
    setDataDetails([...dataDetails]);
  };

  return (
    <div>
      <h1>Updating Array in state</h1>

      <input
        onChange={(e) => handleUser(e.target.value)}
        type="text"
        placeholder="Enter last Username"
      />

      <input
        onChange={(e) => handleAge(e.target.value)}
        type="text"
        placeholder="Enter last User age"
      />

      {data.map((item, index) => {
        return <h3 key={index}>{item}</h3>;
      })}

      <hr />

      {dataDetails.map((item, index) => {
        return (
          <h4 key={index}>
            {item.name},{item.age}
          </h4>
        );
      })}
    </div>
  );
};
export default UpdateArray;
