import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import {
  addTodo,
  deleteTodo,
  getAllTodo,
  searchTodo,
  updateTodo,
} from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const editHandler = (id, text) => {
    console.log(id, text);
    setIsUpdate(true);
    setText(text);
    setTodoId(id);
  };
  const deleteHandler = (id) => {
    deleteTodo(id, setTodo);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="add"
            onClick={
              isUpdate
                ? () => updateTodo(todoId, text, setText, setTodo, setIsUpdate)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdate ? "Update" : "Add"}
          </button>
          <button
            className="search"
            onClick={() => {
              searchTodo(text, setText, setTodo);
            }}
          >
            Search
          </button>
        </div>

        <div className="list">
          {todo.map((item) => {
            return (
              <Todo
                key={item._id}
                text={item.text}
                editHandler={() => editHandler(item._id, item.text)}
                deleteHandler={() => deleteHandler(item._id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
