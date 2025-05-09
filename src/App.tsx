import { useState } from "react";
import "./app.css";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, text: "käka frukost", done: false },
  { id: 2, text: "Plugga TypeScript", done: false },
  { id: 3, text: "Plugga React", done: false },
  { id: 4, text: "Träna ihjäl ", done: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleClick = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div id="root">
      <h1>Min Todo-lista</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleClick(todo.id)}
            className={todo.done ? "done" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
