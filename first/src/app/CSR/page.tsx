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
      <p>CSR Page</p>
      <div>{`fact : ${fact}`}</div>
      <div>{`length : ${length}`}</div>
    </div>
  );
};

export default CSR;
