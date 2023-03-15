import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos }) {
  // app logic goes here
  //return ui as JSX
  const toDoListItems = todos.map((t, idx) =>
   <ToDoListItem todo={t}key={idx} index={idx}/>);
  return (
    <ul className="ToDoList">
      { toDoListItems }
    </ul>
  );
}
