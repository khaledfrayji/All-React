import React,{useState} from "react";
function OnChange(){
    const[name,setName]= useState();
    const updateName = (event)=>{
        setName(event.target.value);
    }
return(
    <div>
        <input type="text" onChange={updateName}/>
        <p>Name:{name}</p>
    </div>
)
}
export default OnChange