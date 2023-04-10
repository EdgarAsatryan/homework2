import { useState } from "react"

function TodoForm({onAdd}) {

    const [text,setText] = useState("")
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text)
            setText("")
        }}>
            <div className="flex justify-between">
            <input className="outline-none w-4/5 p-1.5" placeholder="What needs to be done?" type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button className="bg-white w-1/6 ">Add</button>
            </div>
        </form>
    )
}

export default TodoForm