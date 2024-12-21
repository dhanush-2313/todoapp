import { useState } from "react";

export default function HowToDoTask() {
  const [task, setTask] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim() || task.length < 3) {
      setError("Please enter a valid task (at least 3 characters).");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Provide step-by-step instructions on how to do the following task: ${task}`,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const text = data.choices[0].message.content;
      setInstructions(text);
    } catch (error) {
      console.error("Error generating instructions:", error);
      setError(
        "Sorry, there was an error generating instructions. Please try again."
      );
      setInstructions("");
    } finally {
      setLoading(false);
    }
  };

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
          disabled={loading}
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Instructions"}
        </button>
      </form>
      {error && <div className="mt-2 text-red-500">{error}</div>}
      {instructions && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold mb-2">Instructions:</h3>
          <p>{instructions}</p>
        </div>
      )}
    </div>
  );
}
