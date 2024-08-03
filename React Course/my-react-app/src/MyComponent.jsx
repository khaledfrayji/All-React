import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("khaled");
  const [age,setAge] = useState(0); 
  const [isEmployed,setIsEmployed] = useState(false);
  const updateName = () => {
    setName ("Frayji");
  }
  
  const updateAge = () => {
    setAge (age+1);
  }
  const ToggleEmployed = () => {
    setIsEmployed(true);
  }
  return (
    <div>
      <p>
       Name: {name}
      </p>
      <button onClick={updateName}>
        Set Name
      </button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>
        Set Age
      </button>
      <p>Is Employed: {isEmployed?"Yes":"No"}</p>
      <button onClick={ToggleEmployed}>
        Toggle Employed
      </button>
    </div>
  );
}
export default MyComponent;
