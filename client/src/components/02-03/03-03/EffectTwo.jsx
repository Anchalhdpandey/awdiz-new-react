import { useEffect, useState } from "react"

const EffectTwo=()=>{
    const[counter,setCounterValue]=useState(1)
    useEffect(()=>{
        console.log("Code executed!!")
    },[])
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>setCounterValue(counter+1)}>+</button>
        </div>
    )
}
export default EffectTwo;