import { useState } from "react";
import TodoList from "./components/ToDoList";
import TodoSummary from "./components/ToDoSummary";

type Todo = { id: number; text: string; done: boolean };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [dark, setDark] = useState(false);

  function addTodo(text: string) {
    const newTodo: Todo = { id: Date.now(), text, done: false };
    setTodos(prev => [...prev, newTodo]);
  }

  function toggleTodo(id: number) {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }

  function removeTodo(id: number) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="p-4 ">
      <div className="justify-items-center">
        <h1 className="text-xl font-bold">My ToDooos</h1>

        {/* Pass state and functions DOWN */}
        <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />

        {/* Second component also gets the same todos */}
        <TodoSummary todos={todos} />
      </div>
      <div className="absolute top-0 right-0 justify-content-center">
        <button
        className= "dark:bg-black bg-black"
        onClick= {()=>setDark(true)}
        >
          {dark?"darkmode":"lightmode"}
        </button>
      </div>
    </div>  
  );
}
