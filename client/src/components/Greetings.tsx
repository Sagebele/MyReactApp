

type GreetingsProps = {
    name: string; //read-only input from parent
}

export default function Greeting({name}: GreetingsProps){
    const hand = (name.length !== undefined) && (name.length < 10)
    //This component has no state. It just derives UI from the prop.
    if(!name){
        return <p className="text-sm text-gray-500 mt-2">Type your name above.</p>

    }
    return <p className="mt-2">Hello, {name} ! {hand ? "👋" : "🖐️"}</p>
}