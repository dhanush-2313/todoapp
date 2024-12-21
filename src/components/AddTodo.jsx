import { useState } from 'react'

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="mt-2 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
        Add Todo
      </button>
    </form>
  )
}

