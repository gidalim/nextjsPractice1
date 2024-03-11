import React from "react";

const SSG = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const { fact, length } = await response.json();

  return (
    <div>
      <p>SSG Page</p>
      <div>{`fact : ${fact}`}</div>
      <div>{`length : ${length}`}</div>
    </div>
  );
};

export default SSG;
