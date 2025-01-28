import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

const dataTasks = [
  {
    id: 1,
    text: "Study programming",
    description: "Study programming to be a fullstack developer.",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Study english",
    description: "Study english to be fluent.",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Study math",
    description: "Study math to be a great fullstack developer.",
    isCompleted: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(dataTasks);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      // Precisa atualizar a tarefa
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      // Não é preciso atualizar a tarefa
      return task;
    });

    setTasks(newTasks);
  };

  const onClickDeleteTask = (taskId) => {
    // Filtrar todas as tarefas que não tem o id igual ao taskId
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const onClickCreateTask = (taskTitle, taskDescription) => {
    const newTask = {
      id: v4(),
      text: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask onClickCreateTask={onClickCreateTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>
    </div>
  );
}
