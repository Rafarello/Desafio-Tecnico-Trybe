/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Tasks.css';
import { updateTask } from '../services/tasksAPI';

function UpdateTaskInputSection({ task }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('pendente');


  const setInitialData = () => {
    setTaskName(task.name);
    setTaskDescription(task.description);
    setTaskStatus(task.status);
  };

  useEffect(() => {
    setInitialData();
  }, [task]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id);
    const updatedTask = {
      name: taskName,
      description: taskDescription,
      status: taskStatus,
    };
    await updateTask(id, updatedTask);
    navigate('/');
  };

  return (
    <section className="update-tasks-input-section">
      <form className="update-form">
        <label htmlFor="name">
          <span>Atualizar nome da tarefa</span>
          <input
            type="text"
            placeholder="Digite aqui o nome atualizado"
            value={taskName}
            onChange={({ target }) => setTaskName(target.value)}/>
        </label>
        <label htmlFor="description">
          <span>Atualizar descrição da tarefa</span>
          <input
            type="text"
            placeholder="Digite aqui a descrição atualizada"
            value={taskDescription}
            onChange={({ target }) => setTaskDescription(target.value)}/>
        </label>
        <label htmlFor="status">
          <select
            value={taskStatus}
            onChange={({ target }) => setTaskStatus(target.value)}>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
            <option value="pronto">Completa</option>
          </select>
        </label>
        <button
          type='submit'
          className='tasks-input-button'
          onClick={ handleSubmit }
        >
          Atualizar Tarefa
        </button>
      </form>
    </section>
  );
}

UpdateTaskInputSection.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default UpdateTaskInputSection;
