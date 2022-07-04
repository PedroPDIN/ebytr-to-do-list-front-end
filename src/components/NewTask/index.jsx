import React, { useContext } from 'react';
import TaskContext from '../../store/context';
import SNewTask from './styled';

const NewTask = () => {
  const {
    task,
    handleTask,
    handleState,
    addList,
  } = useContext(TaskContext);

  return (
    <SNewTask>
      <form action="">
        <div>
          <textarea
            name="text-task"
            cols="30"
            rows="10"
            value={ task }
            onChange={ handleTask }
          />
        </div>

        <div className="radios">
          <label htmlFor="pending">
            <input
              type="radio"
              name="pending"
              value="Pendente"
              onClick={ handleState }
            />
            Pendente
          </label>

          <label htmlFor="progress">
            <input
              type="radio"
              name="pending"
              value="Andamento"
              onClick={ handleState }
            />
            Andamento
          </label>

          <label htmlFor="ready">
            <input
              type="radio"
              name="pending"
              value="Pronto"
              onClick={ handleState }
            />
            Pronto
          </label>
        </div>

        <div>
          <button type="button" onClick={ addList }>Adicionar</button>
        </div>
      </form>
    </SNewTask>
  );
};

export default NewTask;
