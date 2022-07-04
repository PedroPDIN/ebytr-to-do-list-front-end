import React, { useContext } from 'react';
import TaskContext from '../../store/context';
import COMPONENTS from '../../components';

const ListTask = () => {
  const { newTask, lists } = useContext(TaskContext);

  return (
    <div>
      <h1>To Do List</h1>
      {!newTask ? (<COMPONENTS.ButtonNewTask />) : (<COMPONENTS.NewTask />)}

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
