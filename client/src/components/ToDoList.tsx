import { useState } from "react";

type Todo = { id: number; text: string; done: boolean };

export default function TodoList() {
  const [items, setItems] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  function addItem(e: React.FormEvent) {
    e.preventDefault();                 // stop page refresh
    if (!text.trim()) return;           // ignore empty
    if(items.length >= 5){ // disable addItem when full
      setDisabled(true);
      return;
    }
    else{
      setDisabled(false);
    }  
    const newItem: Todo = {
      id: Date.now(),                   // simple unique id
      text: text.trim(),
      done: false,
    };
    setItems([...items, newItem]);      // create a new array (immutability)
    setText("");       
               // clear input
  }

  function toggle(id: number) {
    setItems(items.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function remove(id: number) {
    setItems(items.filter(t => t.id !== id));
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Todo</h2>

      {/* Add form */}
      <form onSubmit={addItem}  className="flex items-center gap-2 mb-4">
        <input
          className="border rounded p-2 text-black w-full max-w-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task…"
        />
        <button  className="px-3 py-2 rounded bg-blue-600 text-white">
          Add
        </button>
        {disabled && <p className="text-red-950"> Limit Reached</p>}
        
      </form>

      {/* List */}
      <ul className="space-y-2">
        {items.map(item => (
          <li
            
          key={item.id}                                 
            className="flex items-center justify-between border rounded p-2"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
              />
              <span className={item.done ? "line-through opacity-60" : ""}>
                {item.text}
              </span>
            </label>

            <button
              onClick={() => remove(item.id)}
              className="text-sm px-2 py-1 border rounded hover:bg-gray-100"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
