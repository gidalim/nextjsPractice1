import React from "react";

const ISR = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    next: {
      revalidate: 5,
    },
  });
  const { fact, length } = await response.json();

  return (
    <div>
      <p>ISR Page</p>
      <div>{`fact : ${fact}`}</div>
      <div>{`length : ${length}`}</div>
    </div>
  );
};

export default ISR;
