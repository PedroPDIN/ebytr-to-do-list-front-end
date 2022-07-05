import React, { useContext } from 'react';
import TaskContext from '../../store/context';
import COMPONENTS from '../../components';
import SListTask from './styled';

const ListTask = () => {
  const { newTask, lists } = useContext(TaskContext);

  const dateStructure = (date) => {
    const justDate = date.slice(0, -14);
    return justDate.split('-').reverse().join('-');
  };

  return (
    <SListTask>
      <h1>To Do List</h1>
      {!newTask ? (<COMPONENTS.ButtonNewTask />) : (<COMPONENTS.NewTask />)}

      {lists.map(({
        id, task, creation_date: currentDate, status,
      }, index) => (
        <section>
          <div className="task" id={ id }>
            <p>{`${index} - ${task}`}</p>
          </div>

          <div className="task-info">
            <p>{ status }</p>
            <p>
              { dateStructure(currentDate) }
            </p>
          </div>

        </section>
      ))}
    </SListTask>
  );
};

export default ListTask;
