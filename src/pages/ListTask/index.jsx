import React, { useContext } from 'react';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import TaskContext from '../../store/context';
import COMPONENTS from '../../components';
import SListTask from './styled';

const ListTask = () => {
  const {
    newTask,
    lists,
    getIdUpdate,
    getIdDelete,
  } = useContext(TaskContext);

  const dateStructure = (date) => {
    const justDate = date.slice(0, -14);
    return justDate.split('-').reverse().join('-');
  };

  return (
    <SListTask>
      <h1>To Do List</h1>
      {!newTask ? (<COMPONENTS.ButtonNewTask />) : (<COMPONENTS.NewTask />)}

      {lists.map(({
        id, task, status, creation_date: currentDate,
      }, index) => (
        <section key={ id }>
          <div className="task"><p>{`${index + 1} - ${task}`}</p></div>
          <div className="task-info">
            <p>{ status }</p>
            <p>{ dateStructure(currentDate) }</p>
          </div>

          <button
            className="edit-task"
            id={ id }
            onClick={ () => getIdUpdate(id) }
            type="button"
          >
            <AiTwotoneEdit />
          </button>
          <button
            className="delete-task"
            id={ id }
            onClick={ () => getIdDelete(id) }
            type="button"
          >
            <AiTwotoneDelete />
          </button>
        </section>
      ))}
    </SListTask>
  );
};

export default ListTask;
