/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import { requestAllTasks } from '../services/tasksAPI';
import TaskCard from './TaskCard.jsx';

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasksFromApi = async () => {
    const response = await requestAllTasks();
    setTasks(response.message);
  };

  useEffect(() => {
    fetchTasksFromApi();
  }, []);
  return (
    <section className='tasks-list'>
      <h1>Tarefas:</h1>
      {
        tasks.map(({
          _id, name, description, status, createdAt,
        }, index) => (
          <TaskCard
            key={index}
            id={_id}
            name={ name }
            description={ description }
            status={ status }
            createdAt={createdAt}
          />
        ))
      }
    </section>
  );
}

export default TasksList;
