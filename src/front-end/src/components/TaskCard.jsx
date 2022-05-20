/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskCard.css';
import { deleteTask } from '../services/tasksAPI';

function TaskCard({
  id, name, description, status, createdAt,
}) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteTask(id);
    navigate('/');
  };

  const handleUpdateLink = () => navigate(`/tarefas/${id}`);

  return (
    <div id={id} className="task-card">
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>Status:{status}</p>
        <p>{createdAt}</p>
      </div>
      <button
        className='button'
        onClick={ handleUpdateLink }
      >
        Atualizar tarefa
      </button>
      <button
        className='button'
        onClick={ handleDelete }
      >
        Apagar tarefa
      </button>
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
