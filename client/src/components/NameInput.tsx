import Greeting from "./Greetings"
import CharacterCount from "./CharacterCount"

type NameInputProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function NameInput({ value, onChange }: NameInputProps) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">Your name:</label>

      {/* Flex container for input + button */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your name..."
          className="border rounded p-2 text-black"
        />
        <button
          type="button"
          onClick={() => onChange("")}
          className="px-3 py-2 border rounded bg-black-200 hover:bg-gray-300"
        >
          Reset
        </button>
      </div>
    
    
      {/* New: character count + greeting */}
      <CharacterCount text={value} max={20} />
      <Greeting name={value} />
    </div>
  );
}
