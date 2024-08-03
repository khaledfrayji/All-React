import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({ year: 2024,
                                    Make:"Ford",
                                    Model:"Mustang"
                                });
const ChangeYear=(event)=>{
    setCar(c=>({...c,year:event.target.value}));
}
const ChangeMake=(event)=>{
    setCar(c=>({...c,Make:event.target.value}));
}
const ChangeModel=(event)=>{
    setCar(c=>({...c,Model:event.target.value}));
}

  return(
    <div>
        <p>Your favorite car is {car.year} {car.Make} {car.Model}</p>
        <input type="number" value={car.year} onChange={ChangeYear}/><br/>
        <input type="text" value={car.Make} onChange={ChangeMake}/><br/>
        <input type="text" value={car.Model} onChange={ChangeModel}/>
        
    </div>
  ) 
}
export default Car;
