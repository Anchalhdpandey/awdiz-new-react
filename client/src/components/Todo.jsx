import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todo, "todo", todos, "todos");
  function HandleChange(event) {
    setTodo(event.target.value);
  }
  function HandleSubmit() {
    setTodos([...todos, todo]);
    // spread operator isliye use kiya h because hamare purana todo ka array click krne p value store rahe nhi toh purana wala data todo ka chala jta hai.
    setTodo("");
    // settodo array k data ko khali krne k liye empty string m set kiya h nhi toh woh input field m set rega
  }
  return (
    <div>
      <h3>Add Todo</h3>
      <input
        value={todo}
        onChange={HandleChange}
        type="text"
        placeholder="Do lunch..."
      />
      <button onClick={HandleSubmit}>Submit</button>
      {todos.length ? (
        <div>
          <h2>Your Todos :</h2>
          {todos.map((todo, i) => (
            <p>
              {i + 1}. {todo}
            </p>
          ))}
        </div>
      ) : (
        <h1>No todos found.</h1>
      )}
    </div>
  );
};
export default Todo;
