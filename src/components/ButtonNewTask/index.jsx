import React, { useContext } from 'react';
import TaskContext from '../../store/context';
import SButtonNewTask from './styled';

const ButtonNewTask = () => {
  const { addNewTasks } = useContext(TaskContext);

  return (
    <SButtonNewTask>
      <button type="button" onClick={ addNewTasks }>Adicionar tarefa</button>
    </SButtonNewTask>
  );
};

export default ButtonNewTask;
