import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onClickDeleteTask }) {
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
            <button className="bg-slate-400 p-2 rounded-md text-white">
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
