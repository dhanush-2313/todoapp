export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between p-2 bg-white rounded shadow">
      <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <div>
        <button 
          onClick={() => toggleTodo(todo.id)} 
          className="px-2 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={() => deleteTodo(todo.id)} 
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

