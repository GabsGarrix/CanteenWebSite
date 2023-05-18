import React, { useState } from "react";
import { dataRef } from "../helpers/Firebase";

function About() {
  const [name, setname] = useState("");
  const handleAdd = () => {
    dataRef.ref().child("all").push(name);
    setname("");
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default About;
