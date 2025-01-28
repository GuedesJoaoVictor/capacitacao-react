import { useState } from "react";
import Input from "./Input";

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
      <Input
        placeholder={"Enter task title"}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Enter task description"
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
