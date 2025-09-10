import React from "react";

const Map_Practice = () => {
  const arr = ["Sid", "Rohit", "Ritesh", "Shivam"];
  const obj = [
    {
      Name: "Siddharth",
      Age: 21,
      Location: "Vasai",
    },
    {
      Name: "Ritesh",
      Age: 22,
      Location: "Nallasopara",
    },
    {
      Name: "Shivam",
      Age: 22,
      Location: "Nallasopara",
    },
    {
      Name: "Rohit",
      Age: 21,
      Location: "Vasai",
    },
  ];
  return (
    <div>
      <ul>
        {arr.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}

        <h2>With Objects now</h2>
        <ol>
          {obj.map((value, index) => {
            return (
              <li key={index}>
                {value.Name} - {value.Age} - {value.Location}
              </li>
            );
          })}
        </ol>
      </ul>
    </div>
  );
};

export default Map_Practice;
