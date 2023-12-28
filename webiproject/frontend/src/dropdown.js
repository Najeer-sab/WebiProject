import React, { useState } from "react";

const Dropdown1 = () => {
  const [selectCity, setSelectCity] = useState("");
  const cities = [
    { id: "1", value: "Delhi" },
    { id: "2", value: "Mumbai" },
    { id: "3", value: "Mumbai" },
    { id: "4", value: "Delhi" },
    { id: "5", value: "Pune" },
  ];
  const onChange=(el)=>{
    setSelectCity(el.target.value)
  }

  return (
    <>
      <select onChange={onChange}>
        <option>Select your city: </option>
        {cities.map((cities) => (
          <option key={cities.id} value={cities.value}>
            {cities.value}
          </option>
        ))}

      </select>
      <h2>Select your city:{selectCity} </h2>

    </>
  );
};

export default Dropdown1;
