import { useState } from "react";

type Todo = { id: number; text: string; done: boolean };

interface Props {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoList({ todos, addTodo, toggleTodo, removeTodo }: Props) {
  const [text, setText] = useState("");

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim()); // send text UP to parent
    setText("");
  }

  return (
    <div className="mb-6">
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          className="border p-2 flex-1 text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>

      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
              <span className={todo.done ? "line-through opacity-60" : ""}>{todo.text}</span>
            </label>
            <button onClick={() => removeTodo(todo.id)} className="text-sm text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
