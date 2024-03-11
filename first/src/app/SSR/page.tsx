import React from "react";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });

  const { fact, length } = await response.json();

  return (
    <div>
      <p className="text-blue-600/100 p-3">SSR Page</p>
      <div className="text-slate-500 hover:text-blue-600 p-3">{`fact : ${fact}`}</div>
      <div className="text-slate-500 hover:text-blue-600 p-3">{`length : ${length}`}</div>
    </div>
  );
};

export default SSR;
