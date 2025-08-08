import { useState } from "react";

export default function App() {
  // State for name
  const [name, setName] = useState("");
  // State for counter
  const [count, setCount] = useState(0);
  // State for a "dark mode" toggle
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">React Practice Playground</h1>

      {/* Name input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
          className="border rounded p-2 text-black"
        />
        {name && <p className="mt-2">Hello, {name}! 👋</p>}
      </div>

      {/* Counter */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Counter</h2>
        <p className="mb-2">Current value: {count}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Increase
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Decrease
          </button>
        </div>
      </div>

      {/* Dark mode toggle */}
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
  );
}
