import { useMemo, useState } from "react"

const UseMemo=()=>{
    const[counter, setCounter]=useState(1);
    const[todos, setTodos]=useState([]);
    function AddTodo(){
        setTodos([...todos, "New Todo"])
    }
    const lengthyCalculations=useMemo(()=>ExpensiveCalculations(counter), [counter])
    return(
        <div>
            <h1>Expensive Calculation:{lengthyCalculations}</h1>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={AddTodo}>Add todo</button>
            {todos.map((todo)=>(
                <h1>{todo}</h1>
            ))}
        </div>
    )
}
function ExpensiveCalculations(number){
    console.log("Running the expensive calculation...")
    for(var i=0;i<1000000000;i++){
        number+=1;
    }return number;
}
export default UseMemo;