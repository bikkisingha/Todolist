import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchTaskList, toggleTask } from "./TaskActions";
import Header from "./components/Header";
import Task from "./components/Task";
import { selectLoadingTasks, selectTaskList } from "./TaskSelectors";
import styles from "./styles.module.css";

export default function App() {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTaskList);
  const loading = useSelector(selectLoadingTasks);

  const subTitle = useMemo(() => {
    const completedTasks = tasks.filter((each) => each.completed);
    return `${completedTasks.length} of ${tasks.length} tasks are completed`;
  }, [tasks]);

  function handleClick(id) {
    dispatch(toggleTask(id));
  }

  useEffect(() => {
    dispatch(fetchTaskList());
  }, [dispatch]);

  return (
    <div className="App">
      <Header title="My Tasks" subTitle={subTitle} />
      <Outlet />
      {loading && <div>Loading tasks....</div>}
      {!loading && (
        <div className={styles.tasks_container}>
          {tasks.map((each) => (
            <Task
              key={each.id}
              id={each.id}
              completed={each.completed}
              title={each.title}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
