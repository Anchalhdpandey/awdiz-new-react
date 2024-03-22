import { useEffect, useState } from "react";

function EffectOne() {
  const [counter, setCounterValue] = useState(1);
  const [counter2, setCounterValue2] = useState(7);
  useEffect(()=>{
    console.log("code executed!!!")
  })
  return (
    <div>
      <h1>Counter 1:{counter}</h1>
      <button onClick={() => setCounterValue(counter + 1)}>+</button>
      <h1>Counter 2:{counter2}</h1>
      <button onClick={() => setCounterValue2(counter2 + 1)}>+</button>
    </div>
  );
}
export default EffectOne;