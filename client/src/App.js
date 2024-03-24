import { Route, Routes } from "react-router-dom";
import "./App.css";
import EffectOne from "./components/02-03/03-03/EffectOne";
import Counter from "./components/02-03/counter";
import EffectTwo from "./components/02-03/03-03/EffectTwo";
import EffectThree from "./components/02-03/03-03/EffectThree";
import EffectFour from "./components/02-03/03-03/EffectFour";
import Welcome from "./components/02-03/03-03/Welcome";
import Register from "./components/02-03/06-03/Register";
import CounterRedux from "./components/02-03/20-03/CounterRedux";
import UseReducer from "./components/02-03/09-03/UseReducer";
import UseMemo from "./components/02-03/22-03/Usememo";
import UseCallback from "./components/02-03/23-03/UseCallback";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/effect-1" element={<EffectOne />} />
        <Route path="/effect-2" element={<EffectTwo />} />
        <Route path="/effect-3" element={<EffectThree />} />
        <Route path="/effect-4" element={<EffectFour />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/counter-redux" element={<CounterRedux />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-memo" element={<UseMemo />} />
      </Routes>
      <UseCallback />
    </div>
  );
}

export default App;
