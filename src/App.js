import React, { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar 14hrs por semana',
      completed: false
    },
    {
      id: '2',
      title: 'Ler 20 livros ao mês',
      completed: true
    },
  ]);

  const handleTaskAdition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      }
    ]
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAdition={handleTaskAdition}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;