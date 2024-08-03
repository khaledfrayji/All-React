import MyCounter from "./MyCounter"
import MyComponent from "./MyComponent"
import OnChange from "./OnChange"
import Picker from "./colorPicker"
import Car from "./Car"
import ToDoList from "./ToDoList"
   //React Hook is a special function that allows functional component to
    // use React features without writing cass component(React v16.8)
    //(usestate,useEffect,useContext,useReducer,useCallback,and more...)

    //useState = a React Hook that allows the creation of a stateful variable
    //           and a setter function to update its value in the virtual DOM.
    //           [name,setName]


    //useEffect = Do some code when an event occur
  function App() {
    return (
      <>
      
         <ToDoList/>
      </>
  
    )
  }

  export default App
