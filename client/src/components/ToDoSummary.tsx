type Todo = { id: number; text: string; done: boolean };

interface Props {
  todos: Todo[];
}

export default function TodoSummary({ todos }: Props) {
  const total = todos.length;
  const completed = todos.filter(t => t.done).length;
  const remaining = total - completed;

  return (
    <div className="p-3 border rounded bg-gray-50">
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {remaining}</p>
    </div>
  );
}
