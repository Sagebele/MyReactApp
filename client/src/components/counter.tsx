import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div className = "mb-6">
            <h2 className = "text-xl font-semibold mb-2">Counter</h2>
            <p className = "mb-2">Current Value: {count}</p>
            <div className = "flex gap-2">
                <button onClick = {()=> setCount(count + 1)} 
                className = "bg-green-500 px-3 py-1 rounded">Increase</button>
                <button onClick = {() => setCount(count -1)}
                className="bg-red-500 px-3 py-1 rounded">Decrease</button>
            </div>
        </div>
    )
}