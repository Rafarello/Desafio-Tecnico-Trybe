/* eslint-disable require-jsdoc */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { createNewTask } from '../services/tasksAPI';
import '../styles/Tasks.css';

function NewTaskInputSection() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('pendente');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDescription,
      status: taskStatus,
    };

    await createNewTask(newTask);
    navigate('/');
  };

  return (
    <section className="tasks-input-section">
      <form>
        <label htmlFor="name">
          <span>Nome</span>
          <input
            type="text"
            placeholder="Digite aqui o nome da nova tarefa"
            value={taskName}
            onChange={({ target }) => setTaskName(target.value)}/>
        </label>
        <label htmlFor="description">
          <span>Descrição</span>
          <input
            type="text"
            placeholder="Digite aqui a descrição da nova tarefa"
            value={taskDescription}
            onChange={({ target }) => setTaskDescription(target.value)}/>
        </label>
        <label htmlFor="status">
          <select
            value={taskStatus}
            onChange={({ target }) => setTaskStatus(target.value)}
          >
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
          Nova tarefa
        </button>
      </form>
    </section>
  );
}

export default NewTaskInputSection;
