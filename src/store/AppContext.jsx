import React, { useState, createContext } from "react";
import { v1 as uuid } from "uuid";

const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      userId: 1,
      id: uuid(),
      title: taskName,
      completed: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const editTaskTitle = (taskId, newTitle) => {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        const newTask = {
          ...task,
          title: newTitle,
        };
        return newTask;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const state = { tasks, setTasks, addTask, deleteTask, editTaskTitle };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContext;
