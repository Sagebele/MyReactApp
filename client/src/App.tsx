import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cases from "./pages/Cases";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="font-bold">Incident & Evidence System</h1>
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/cases" className="hover:underline">Cases</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Incident & Evidence System
      </footer>
    </div>
  );
}
