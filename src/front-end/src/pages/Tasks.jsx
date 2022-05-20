/* eslint-disable require-jsdoc */
import React from 'react';
import Header from '../components/Header.jsx';
import NewTaskInputSection from '../components/NewTaskInputSection.jsx';
import TasksList from '../components/TasksList.jsx';

function Tasks() {
  return (
    <main>
      <Header />
      <NewTaskInputSection />
      <TasksList />
    </main>
  );
}

export default Tasks;

