import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttpRequest from './hooks/useHttpRequest';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const { isLoading, error, fetchOrGetData } = useHttpRequest();

  useEffect(() => {
    const setValues = (data) => {
      const loadedTasks = [];
  
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }
    fetchOrGetData({ url:'https://customhook-7d8ba-default-rtdb.firebaseio.com/tasks.json'}, setValues);
  }, [fetchOrGetData]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchOrGetData}
      />
    </React.Fragment>
  );
}

export default App;
