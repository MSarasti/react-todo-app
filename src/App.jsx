import React, { useContext, useEffect } from "react";
import useGetTasks from "./hooks/useGetTasks";
import AppContext from "./store/AppContext";
import SearchBar from "./components/SearchBar/SearchBar";
import TasksList from "./components/TasksList/TasksList";
import SortItems from "./components/SortItems/SortItems";
import "./App.scss";

const App = () => {
  const { tasks } = useGetTasks();
  const state = useContext(AppContext);

  useEffect(() => {
    state.setTasks(tasks);
    //eslint-disable-next-line
  }, [tasks]);

  return (
    <div className="AppContainer">
      <SearchBar />
      <SortItems />
      <TasksList />
    </div>
  );
};

export default App;
