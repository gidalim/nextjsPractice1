"use client";

import React, { useEffect, useState } from "react";

const CSR = () => {
  const [fact, setFact] = useState("");
  const [length, setLength] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const { fact, length } = await response.json();
      setFact(fact);
      setLength(length);
      console.log(fact);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className="text-blue-600/100 p-3">CSR Page</p>
      <div className="text-slate-500 hover:text-blue-600 p-3">{`fact : ${fact}`}</div>
      <div className="text-slate-500 hover:text-blue-600 p-3">{`length : ${length}`}</div>
    </div>
  );
};

export default CSR;
