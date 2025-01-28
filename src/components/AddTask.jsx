import { useState } from "react";

function AddTask({ onClickCreateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = () => {
    // Verifica se o título ou a descrição está vazio.
    if (!title.trim() || !description.trim()) {
      alert("Title or description is empty.");
      return;
    }
    setTitle("");
    setDescription("");
    onClickCreateTask(title, description);
  };

  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Enter task title"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter task description"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleCreateTask}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Create
      </button>
    </div>
  );
}

export default AddTask;
