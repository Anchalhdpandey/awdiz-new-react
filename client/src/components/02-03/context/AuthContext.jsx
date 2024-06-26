import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();
function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}
const InitialState = { user: null };
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  function LOGIN(data) {
    dispatch({ type: "LOGIN", payload: data });
  }
  function LOGOUT() {
    dispatch({ type: "LOGOUT" });
  }
  async function getUserData() {
    try {
      const response = await axios.get("/api/v1/product/validate-token", {
        withCredentials: true,
      });
      if (response.data.success) {
        LOGIN(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
      getUserData();
  }, []);
  // reducer function hai, initialstate object h

  return (
    <AuthContext.Provider value={{ state, LOGIN, LOGOUT }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
