import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ onLogin }: { onLogin: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    onLogin(email.trim()); // fake auth
    nav("/todos");
  }

  return (
    <form onSubmit={submit} className="space-y-3 max-w-sm">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        className="border p-2 rounded w-full text-black"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      <p className="text-sm">No account? <Link to="/signup" className="underline">Sign up</Link></p>
    </form>
  );
}
    