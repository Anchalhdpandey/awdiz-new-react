import React, { useState } from "react";
import { createContext } from "react";
export const MyCounterContext = createContext();
// HOC High order component- props component
const ProvideCounterContext = ({ children }) => {
  const [counter, setCounter] = useState(0);
  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    setCounter(counter - 1);
  }
  function Reset() {
    setCounter(0);
  }
  return (
    <MyCounterContext.Provider value={{ counter, Increment, Decrement, Reset }}>
      {children}
    </MyCounterContext.Provider>
  );
};
export default ProvideCounterContext;
