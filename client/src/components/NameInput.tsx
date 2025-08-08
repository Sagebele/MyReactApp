import {useState}  from 'react';



export default function NameInput(){
    const [name, setName] = useState("");

    return(
        <div className = "mb-6">
            <label className = "block mb-2 font-medium">Your Name:</label>
            <input
            type = "text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            placeholder='Insert your name..'
            className='border rounded p-2 text-black'
            />
            {name && <p className='mt-2'>Hello, {name}! 👋</p>}

        </div>
    )
}