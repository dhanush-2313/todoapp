export default function FilterTodos({ filter, setFilter }) {
  return (
    <div className="mb-4 flex justify-center space-x-2">
      <button 
        onClick={() => setFilter('all')} 
        className={`px-2 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button 
        onClick={() => setFilter('active')} 
        className={`px-2 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Active
      </button>
      <button 
        onClick={() => setFilter('completed')} 
        className={`px-2 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Completed
      </button>
    </div>
  )
}

