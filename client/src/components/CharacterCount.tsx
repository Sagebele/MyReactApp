


type CharacterCountProps = {
    text: string;
    max?: number; //option limit for later
}

export default function CharacterCount({ text, max }: CharacterCountProps) {
    const count = text.length;
    const over = max !== undefined && count > max;

    return (
        <div className="text-sm mt-1">
        <span className={over ? "text-red-600" : "text-gray-600"}>
            {count} {max ? `/ ${max}` : "chars"}
        </span>
        </div>
    );
}