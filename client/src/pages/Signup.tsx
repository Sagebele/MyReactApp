import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup({ onSignup }: { onSignup: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    onSignup(email.trim());
    nav("/todos");
  }

  return (
    <form onSubmit={submit} className="space-y-3 max-w-sm">
      <h2 className="text-2xl font-bold">Signup</h2>
      <input
        className="border p-2 rounded w-full text-black"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Create account</button>
      <p className="text-sm">Already have one? <Link to="/login" className="underline">Login</Link></p>
    </form>
  );
}
