import React, { useContext } from 'react';
import TaskContext from '../../store/context';

const DeleteTask = () => {
  const {
    getDelete,
    optionDelete,
    notDelete,
  } = useContext(TaskContext);

  return (
    <div>
      {optionDelete && (
        <div>
          <button type="button" onClick={ getDelete }>Sim</button>
          <button type="button" onClick={ notDelete }>Não</button>
        </div>

      )}
    </div>
  );
};

export default DeleteTask;
