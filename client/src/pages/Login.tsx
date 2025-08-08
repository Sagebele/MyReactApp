export default function Login() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4 max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full p-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
}
