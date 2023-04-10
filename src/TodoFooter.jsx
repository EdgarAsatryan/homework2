function TodoFooter({todos,onClearComplected}) {
    let compSize = todos.filter((todo)=> todo.isComplected).length
    return (
        <div className="flex justify-between">
            <span className="text-lg">{compSize}/{todos.length} Completed</span>
            <button className="bg-white w-1/4 p-1 " onClick={onClearComplected}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter