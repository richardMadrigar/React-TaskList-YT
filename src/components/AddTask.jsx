import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {

  const [inputData, setInputData] = useState('') //state para mudar o estado da variavel

  //funcao para pegar o value do input, 
  //dentro do input tem o onChange q chama a FN toda vez que ela altera o state a variavel atualiza
  const handleInputChange = (e) => {
    setInputData(e.target.value) //Pega o valor do value do input, e coloca no setInputDate, só chamar a funcao
    console.log(e.target.value);
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData) //quando chamar esta funcao, passa o valor input para esta funcao
    setInputData('')
  }


  return (
    <div className="add-task-container">

      <input
        className="add-task-input"
        value={inputData}
        type="text"
        onChange={handleInputChange} //chamando a funcao q muda o state
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>

    </div>
  );
}

export default AddTask;