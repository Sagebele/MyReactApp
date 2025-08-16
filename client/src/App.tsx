import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodosPage from "./pages/ToDoPage";

export type Todo = { id: number; title: string; done: boolean };

export default function App() {
  // fake auth for now
  const [user, setUser] = useState<{ email: string } | null>(null);

  // app-level todos so both sidebar and page see the same data
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const addTodo = (title: string) => {
    const t: Todo = { id: Date.now(), title: title.trim(), done: false };
    setTodos(prev => [t, ...prev]);
    setActiveId(t.id);
  };
  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(x => x.id === id ? ({ ...x, done: !x.done }) : x));
  };
  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(x => x.id !== id));
    if (activeId === id) setActiveId(null);
  };

  // simple protected route helper for later
  const RequireAuth = ({ children }: { children: React.ReactNode }) =>
  user ? children : <Navigate to="/login" replace />;

  return (
    <Layout
      user={user}
      onLogout={() => setUser(null)}
      todos={todos}
      activeId={activeId}
      onSelect={setActiveId}
    >
      <Routes>
        <Route path="/login" element={<Login onLogin={(email) => setUser({ email })} />} />
        <Route path="/signup" element={<Signup onSignup={(email) => setUser({ email })} />} />
        <Route
          path="/todos"
          element={
            <RequireAuth>
              <TodosPage
                todos={todos}
                activeId={activeId}
                onAdd={addTodo}
                onToggle={toggleTodo}
                onRemove={removeTodo}
                onSelect={setActiveId}
              />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/todos" replace />} />
      </Routes>
    </Layout>
  );
}
