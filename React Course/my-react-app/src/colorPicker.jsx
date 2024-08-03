
import React,{useState} from "react";







function Picker(){
const[color,setColor]=useState("#FFFFFF");
const updateColor = (event) =>{
setColor(event.target.value);
}
return(
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected color: {color} </p>
        </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={updateColor} />
    </div>
)
}
export default Picker