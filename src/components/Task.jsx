import React from 'react';
// import { FaBeer  } from ' react-icons/fa'
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom'

import './Task.css'

//filho do Tasks //quem renderizar ele vai ser o pai e mandar as props
const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

  const history = useHistory()

  const handleDetailsClick = () => {
    history.push(`/${task.title.split("/").join("-")}`); 
  }

  return (
    <div className={'task-container'}
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >

      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">

        <button className={"remove-task-button"}
          onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </button>


        <button className={"see-task-details-button"}
          onClick={handleDetailsClick}>
          <CgInfo />
        </button>

      </div>
    </div>
  )
}
//<div className="task-container">{task.title} {/*recebe do pai o title*/}</div>

export default Task;
