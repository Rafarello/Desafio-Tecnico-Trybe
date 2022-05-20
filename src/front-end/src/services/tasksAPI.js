import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestAllTasks = async () => {
  const { data } = await api.get('/tarefas');
  return data;
};

export const createNewTask = async (newTask) => {
  const { data } = await api.post('/tarefas', newTask);
  return data;
};

export const getTaskById = async (id) => {
  const { data } = await api.get(`/tarefas/${id}`);
  return data;
};

export const updateTask = async (id, updatedTask) => {
  const { data } = await api.patch(`/tarefas/${id}`, updatedTask);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await api.delete(`/tarefas/${id}`);
  return data;
};
