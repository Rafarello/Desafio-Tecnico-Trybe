/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../services/tasksAPI';
import '../styles/TaskCard.css';
import UpdateTaskInputSection from './UpdateTaskInputSection.jsx';

function SpecificTask() {
  const { id } = useParams();
  const [taskObj, setTaskObj] = useState({});
  const fetchTask = async () => {
    const { message: task } = await getTaskById(id);
    setTaskObj(task);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <section className='tasks-list'>
      <div id={id} className="task-card">
        <p>{taskObj.name}</p>
        <p>{taskObj.description}</p>
        <p>Status: {taskObj.status}</p>
        <p>Criada em: {taskObj.createdAt}</p>
      </div>
      <UpdateTaskInputSection task={taskObj}/>
    </section>
  );
}

export default SpecificTask;
