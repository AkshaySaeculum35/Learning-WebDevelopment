import { useState } from "react";

const UpdateObject = () => {
  const [data, setData] = useState({
    name: "Akshay",
    address: {
      city: "khargone",
      country: "india",
    },
  });
  const handleName = (name) => {
    data.name = name;
    console.log(name);

    setData({ ...data });
  };
  const handleCity = (city) => {
    data.address.city = city;
    console.log(city);

    setData({ ...data, address: { ...data.address, city } });
  };
  const handleCountry = (country) => {
    data.address.country = country;
    console.log(country);

    setData({ ...data, address: { ...data.address, country } });
  };
  return (
    <div>
      <h1>Updating objects in state</h1>

      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />

      <input
        type="text"
        placeholder="update city"
        onChange={(event) => handleCity(event.target.value)}
      />

      <input
        type="text"
        placeholder="update country"
        onChange={(event) => handleCountry(event.target.value)}
      />

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
};
export default UpdateObject;
