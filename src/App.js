import { useState } from "react";
import ToDoList from "./ToDoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack"
  ]);
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button></button>
      {showTodos && <ToDoList todos={todos} />}
    </div>
  );
}
