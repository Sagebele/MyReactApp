import { Link, useLocation } from "react-router-dom";
import type { Todo } from "../App";

type Props = {
    user: { email: string } | null;
    onLogout: () => void;
    todos: Todo[];
    activeId: number | null;
    onSelect: (id: number) => void;
    children: React.ReactNode;
};

export default function Layout({ user, onLogout, todos, activeId, onSelect, children }: Props) {
  const loc = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="p-4 border-b">
          <h1 className="text-lg font-bold">🗂️ My Todos</h1>
          <nav className="mt-3 flex gap-2 text-sm">
            <Link className={linkCls(loc.pathname==="/todos")} to="/todos">Todos</Link>
            {user ? (
              <button onClick={onLogout} className="text-red-600">Logout</button>
            ) : (
              <>
                <Link className={linkCls(loc.pathname==="/login")} to="/login">Login</Link>
                <Link className={linkCls(loc.pathname==="/signup")} to="/signup">Signup</Link>
              </>
            )}
          </nav>
        </div>

        {/* Sidebar list = todo headers */}
        <div className="p-2">
          <p className="text-xs uppercase text-gray-500 px-2 mb-2">Todos</p>
          <ul className="space-y-1">
            {todos.length === 0 && (
              <li className="text-gray-400 text-sm px-2">No todos yet</li>
            )}
            {todos.map(t => (
              <li key={t.id}>
                <button
                  onClick={() => onSelect(t.id)}
                  className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 ${
                    activeId === t.id ? "bg-blue-50 border border-blue-200" : ""
                  }`}
                  title={t.title}
                >
                  <span className={`truncate block ${t.done ? "line-through opacity-70" : ""}`}>
                    {t.title || "(untitled)"}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-3xl mx-auto p-6">{children}</div>
      </main>
    </div>
  );
}

function linkCls(active: boolean) {
  return `px-2 py-1 rounded ${active ? "bg-gray-200" : "hover:bg-gray-100"}`;
}
