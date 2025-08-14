import { useState } from "react";
import type { Todo } from "../App";

type Props = {
  todos: Todo[];
  activeId: number | null;
  onAdd: (title: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onSelect: (id: number) => void;
};

export default function TodosPage({ todos, activeId, onAdd, onToggle, onRemove, onSelect }: Props) {
  const [title, setTitle] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle("");
  }

  const active = todos.find(t => t.id === activeId) || null;

  return (
    <div className="space-y-6">
      <form onSubmit={submit} className="flex gap-2">
        <input
          className="border rounded p-2 flex-1 text-black"
          placeholder="Add a todo title..."
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 rounded">Add</button>
      </form>

      {/* Active pane */}
      <section className="p-4 bg-white rounded border">
        <h3 className="text-lg font-semibold mb-2">Active Todo</h3>
        {!active ? (
          <p className="text-gray-500">Select a todo from the left.</p>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={active.done}
                onChange={() => onToggle(active.id)}
              />
              <span className={active.done ? "line-through opacity-70" : ""}>{active.title}</span>
            </div>
            <button
              onClick={() => onRemove(active.id)}
              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </section>

      {/* Full list on the right panel too (optional) */}
      <section className="p-4 bg-white rounded border">
        <h3 className="text-lg font-semibold mb-2">All Todos</h3>
        <ul className="space-y-2">
          {todos.map(t => (
            <li key={t.id} className="flex items-center justify-between border rounded p-2">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
                <button onClick={() => onSelect(t.id)} className="text-left">
                  <span className={t.done ? "line-through opacity-70" : ""}>{t.title}</span>
                </button>
              </div>
              <button onClick={() => onRemove(t.id)} className="text-sm px-2 py-1 border rounded hover:bg-gray-100">
                Delete
              </button>
            </li>
          ))}
          {todos.length === 0 && <li className="text-gray-500">No items yet</li>}
        </ul>
      </section>
    </div>
  );
}
