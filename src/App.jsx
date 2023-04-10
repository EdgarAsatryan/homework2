import { useState } from 'react'
import './index.css'
import TodoList from './Todo';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isComplected: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isComplected: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isComplected: false,
    },
  ]);
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#23272F]">
      <div className="bg-[#149ECA] w-6/12 min-h-2/5 flex flex-col justify-evenly p-10 gap-7">
      <TodoForm className="" onAdd={(text) => {
        text.trim().length > 0 && 
        setTodos
          ([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isComplected: false
            }
          ]);
      }}/>
      <TodoList 
        todos = {todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo
            }
            return todo;
          }));
        }}
        />
      <TodoFooter todos = {todos}  onClearComplected={() => {
        setTodos(todos.filter((todo) => !todo.isComplected))
      }}/>
      </div>
    </div>
  )
}

export default App
