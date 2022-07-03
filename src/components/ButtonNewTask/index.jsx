import React, { useContext } from 'react';
import TaskContext from '../../store/context';

const ButtonNewTask = () => {
  const { addNewTasks } = useContext(TaskContext);

  return (
    <div>
      <button type="button" onClick={ addNewTasks }>Adicionar tarefa</button>
    </div>
  );
};

export default ButtonNewTask;
