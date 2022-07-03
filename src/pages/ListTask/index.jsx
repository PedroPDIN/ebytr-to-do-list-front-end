import React, { useContext } from 'react';
import TaskContext from '../../store/context';
import COMPONENTS from '../../components';

const ListTask = () => {
  const { lists } = useContext(TaskContext);

  return (
    <div>

      <COMPONENTS.NewTask />

      {lists.map(({ task, creation_date: currentDate, state }) => (
        <div>
          <div>
            <p>{ task }</p>
            <p>{ state }</p>
          </div>

          <div>
            <p>
              { `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}` }
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ListTask;
