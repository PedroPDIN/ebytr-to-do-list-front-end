import React, { useContext } from 'react';
import TaskContext from '../../store/context';
import COMPONENTS from '../../components';
import SListTask from './styled';

const ListTask = () => {
  const { newTask, lists } = useContext(TaskContext);

  return (
    <SListTask>
      <h1>To Do List</h1>
      {!newTask ? (<COMPONENTS.ButtonNewTask />) : (<COMPONENTS.NewTask />)}

      {lists.map(({ task, status }) => (
        <section>
          <div className="task">
            <p>{ task }</p>
          </div>

          <div className="task-info">
            <p>{ status }</p>
            {/* <p>
              { `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}` }
            </p> */}
          </div>

        </section>
      ))}
    </SListTask>
  );
};

export default ListTask;
