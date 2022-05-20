/* eslint-disable require-jsdoc */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tasks from './pages/Tasks.jsx';
import UpdateTask from './pages/UpdateTask.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/tarefas"/> } />
      <Route path="/tarefas" element={ <Tasks /> } />
      <Route path="/tarefas/:id" element={ <UpdateTask />} />
    </Routes>
  );
}

export default App;
