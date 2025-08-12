import { useState } from "react";
import { useRef } from "react";

type Todo = { id: number; text: string; done: boolean };

export default function TodoList() {
  const [items, setItems] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // NEW


  const disabled = items.length >= 5;

  function addItem(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;

    const newItem: Todo = { id: Date.now(), text: trimmed, done: false };
    const newIndex = items.length;

    setItems(prev => [...prev, newItem]);
    setText("");

    setHighlighted(newIndex);
    setTimeout(() => setHighlighted(null), 2000);

    inputRef.current?.focus(); // NEW: put cursor back
    inputRef.current?.select(); // optional: select text
  }

  function startEdit(index: number) {
    setEditingIndex(index);
    setEditingText(items[index].text); // use the item's text
  }

  function saveEdit() {
    if (editingIndex === null) return;
    const trimmed = editingText.trim();
    if (!trimmed) { cancelEdit(); return; }

    // update the Todo object, not replace with a string
    setItems(prev =>
      prev.map((it, i) => (i === editingIndex ? { ...it, text: trimmed } : it))
    );

    setEditingIndex(null);
    setEditingText("");
  }

  function cancelEdit() {
    setEditingIndex(null);
    setEditingText("");
  }

  function toggle(id: number) {
    setItems(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function remove(id: number) {
    setItems(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">Todo</h2>

      {/* Add form */}
      <form onSubmit={addItem} className="flex items-center gap-2 mb-4">
        <input
          className="border rounded p-2 text-black w-full max-w-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task…"
        />
        <button
          disabled={disabled}
          className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        >
          Add
        </button>
        
      </form>
      {disabled && <p className="text-red-600">Limit Reached</p>}

    
      {/* List */}
      <ul className="space-y-2">
        {items.map((item, index) => {
          const isEditing = index === editingIndex;
          const isHighlighted = index === highlighted;

          return (
            <li
              key={item.id}
              className={`flex items-center justify-between border rounded p-2 ${
                isHighlighted ? "font-bold bg-yellow-50" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggle(item.id)}
                />

                {isEditing ? (
                  <input
                    className="border rounded p-1 text-black"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit();
                      if (e.key === "Escape") cancelEdit();
                    }}
                    onBlur={cancelEdit}  // or onBlur={saveEdit} if you prefer
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => startEdit(index)}
                    className={item.done ? "line-through opacity-60 cursor-text" : "cursor-text"}
                  >
                    {item.text} {/* FIX: show text, not id */}
                  </span>
                )}
              </div>
              <button
                onClick={() => remove(item.id)}
                className="text-sm px-2 py-1 border rounded hover:bg-gray-100"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
        
    </div>
  );
}
