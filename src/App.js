import { useState } from "react";
import "./App.css";
function App() {
  let [todoValue, TodoChange] = useState("test");
  let [todolist, updateTodos] = useState([
    {
      id: 1,
      task: "learn react",
    },
    {
      id: 2,
      task: "learn JS",
    },
  ]);
  let nextId = 3;
  function addNewTodo() {
    if (todoValue == "") {
      alert("Add Some Data");
    } else {
      let newTodos = [
        ...todolist,
        {
          id: nextId++,
          task: todoValue,
        },
      ];
      updateTodos(newTodos);
      TodoChange("");
    }
  }
  function deteteTodo(id) {
    let updatedTodos = todolist.filter((todo) => {
      return todo.id != id;
    });
    updateTodos(updatedTodos);
  }
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo-App Using React</h3>
      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => {
            let task = e.target.value;
            TodoChange(task);
          }}
          type="text"
          value={todoValue}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            addNewTodo();
          }}
        >
          ADD
        </button>
      </div>
      <ul className="list-group mt-4">
        {todolist.map((todo) => {
          return (
            <li key={todo.id} className="list-group-item">
              <p>{todo.task}</p>
              <button
                className="btn"
                onClick={() => {
                  deteteTodo(todo.id);
                }}
              >
                ✖️
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
