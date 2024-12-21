
import { useState } from 'react'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export default function HowToDoTask() {
  const [task, setTask] = useState('')
  const [instructions, setInstructions] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!task.trim()) return

    setLoading(true)
    try {
      const { text } = await generateText({
        model: openai('gpt-4o'),
        prompt: `Provide step-by-step instructions on how to do the following task: ${task}`,
      })
      setInstructions(text)
    } catch (error) {
      console.error('Error generating instructions:', error)
      setInstructions('Sorry, there was an error generating instructions. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">How to Do Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="w-full p-2 border rounded mb-2"
        />
        <button 
          type="submit" 
          className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Get Instructions'}
        </button>
      </form>
      {instructions && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Instructions:</h3>
          <p className="whitespace-pre-wrap">{instructions}</p>
        </div>
      )}
    </div>
  )
}

