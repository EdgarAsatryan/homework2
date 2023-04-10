function TodoItem({todo,onChange,onDelete}) {
    return (
        <div>
            <label className="flex justify-between">
                <div>
                <input className="mr-2 w-4 h-4" type="checkbox" checked={todo.isComplected} onChange={(e) => {
                    // e.target.checked
                    onChange({
                        ...todo,
                        isComplected: e.target.checked
                    })
                }}/>
                <span className="text-lg">{todo.text}</span> 
                </div>
                <button onClick={() => {onDelete(todo)}}>X</button>
            </label>
        </div>
    )
}

export default TodoItem