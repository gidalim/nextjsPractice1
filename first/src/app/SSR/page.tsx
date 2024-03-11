import React from "react";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });

  const { fact, length } = await response.json();

  return (
    <div>
      <p>SSR Page</p>
      <div>{`fact : ${fact}`}</div>
      <div>{`length : ${length}`}</div>
    </div>
  );
};

export default SSR;
