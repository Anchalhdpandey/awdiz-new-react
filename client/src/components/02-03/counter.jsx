import { useState } from "react"

function Counter(){
    const [counter, setCounterValue]=useState(1);
    function Increment(){
        setCounterValue(prevValue=>prevValue+1);
    }
    function Decrement(){
        setCounterValue(prevValue=>prevValue-1);
    }
    function Reset(){
        setCounterValue(0);
    }
    return(
        <div>
            <h1>Counter- {counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Counter;