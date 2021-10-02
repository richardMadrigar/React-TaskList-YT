import React, { useEffect, useState } from "react";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";


const App = () => {

  //trabalhando com estado (STATE)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=0'
      )
      setTasks(data)
    };
    fetchTasks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }]
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }


  // aqui recebe todo os o componentes
  return (
    <Router>
      <div className="container">
        <Header />

        <Route path='/' exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />  {/*input*/}
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} /> {/*componete filho, consegue pegar os dados do elemento pai */}
          </>
        )} />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
