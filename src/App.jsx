import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

// Dados para testar a aplicação
// const dataTasks = [
//   {
//     id: 1,
//     text: "Study programming",
//     description: "Study programming to be a fullstack developer.",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "Study english",
//     description: "Study english to be fluent.",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Study math",
//     description: "Study math to be a great fullstack developer.",
//     isCompleted: false,
//   },
// ];

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //Salva as tarefas no localStorage
  }, [tasks]);

  // Só executa uma vez, quando o usuário entra na página
  useEffect(() => {
    const fetchTasks = async () => {
      // Pega tasks da API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      //Pega os dados que ela retorna em JSON
      const data = await response.json();

      // Armazena os dados no estado
      setTasks(data);
    };
    // Se quiser pode chamar a API para pegar tarefas.
    // fetchTasks();
  }, []);

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
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
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
