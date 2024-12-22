# React + Vite To-Do List Application

This project is a simple To-Do list application built with React and Vite. It includes the following features:

1. A user can add a task.
2. A user can mark a task as completed.
3. A user can delete a task.
4. Uses ReactJS for the application with basic styling.
5. Implements the app in functional components with Hooks (useState, useEffect).
6. A user can post “How to do task” that uses OpenAI’s GPT-3/4 API to generate text based on a user’s input and in return display the responses.
7. Has a filter to view completed, pending, or all tasks.
8. Persist tasks in the localStorage so that they are retained when the page is reloaded.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/todoapp.git
   cd todoapp
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add your OpenAI API key:

   ```env
   VITE_OPENAI_API_KEY=your-api-key-here
   ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```
