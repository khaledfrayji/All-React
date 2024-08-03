
    import React, {useState} from "react";

    function MyCounter(){
        const [count,setCount]=useState(0);
        
        const Increment = () =>{
            // setCount(count+1); 
            setCount(c=>c+1); //this is an updater function
            setCount(c=>c+1);
            setCount(c=>c+1);
        }
        const Decrement = () =>{
            setCount(count-1);
            setCount(count-1);
            setCount(count-1);
            //actually this wil not work in React.js       
             }
        const Reset = () =>{
            setCount(0);
        }
        return(
            <div className="Counter-section">
            <p>{count}</p> 
            <button className="odd" onClick={Increment}>Increment</button>  
            <button className="even" onClick={Decrement}>Decrement</button>
            <button className="odd" onClick={Reset}>Reset</button>
            </div>
        )
    }
    
    export default MyCounter