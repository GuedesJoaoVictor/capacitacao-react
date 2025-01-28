import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const dataTasks = [
  {
    id: 1,
    text: "Estudar programação",
    description:
      "Estudar programação para se tornar um desenvolvedor FullStack.",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Estudar inglês",
    description: "Estudar inglês para se tornar fluente.",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar matemática",
    description:
      "Estudar matemática para se tornar um desenvolvedor FullStack.",
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

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>
    </div>
  );
}
