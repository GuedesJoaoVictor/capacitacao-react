import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onClickDeleteTask }) {
  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.text);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <div className="">
      <ul className="space-y-4 mt-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.text}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onClickDeleteTask(task.id)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tasks;
