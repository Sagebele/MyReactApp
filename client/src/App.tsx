import { useState } from "react";
import Counter from "./components/counter"
import NameInput from "./components/NameInput";
import TodoList from "./components/ToDoList";


export default function App() {
  // State for a "dark mode" toggle
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("")

return (
    <div className={`justify-items-center min-h-screen p-8 transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}>
      <h1 className="text-3xl font-bold mb-4">React Practice Playground</h1>

      <Counter />
      <NameInput value={name} onChange={setName} />
      <TodoList />

      <div>
        <h2 className="text-xl font-semibold mb-2">Dark Mode</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
)
}
