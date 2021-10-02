import React from "react";

//importaçoes de componentes
import Task from "./Task";

//esse elemento é pai do Task 
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => { //props(tasks) vem do elemento que renderiza ele

  return (
    <>
      {/* peguei o task quem vem do pai, passei um pau e chamei
      a funcao para retornar quantos obj tiver=> cria um To-do novo  */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} /> //passando por map e devolvendo a qtd de elementos
      ))}
    </>
  )
}

export default Tasks;