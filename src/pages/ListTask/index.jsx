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

      {lists.length < 1 && <h1 style={{ textAlign: 'center' }}>Carregando...</h1>}

      {lists.map(({
        id, task, status, creation_date: currentDate,
      }, index) => (
        <article key={ id }>
          <div className="task"><p>{`${index + 1} - ${task}`}</p></div>
          <div className="task-info">
            <p>{ status }</p>
            <p>{ dateStructure(currentDate) }</p>
          </div>

          <div className="task-buttons">
            <button
              className="edit-task"
              id={ id }
              onClick={ () => getIdUpdate(id) }
              type="button"
            >
              <AiTwotoneEdit className="task-icon" />
            </button>
            <button
              className="delete-task"
              id={ id }
              onClick={ () => getIdDelete(id) }
              type="button"
            >
              <AiTwotoneDelete className="task-icon" />
            </button>
          </div>

          <div>
            <COMPONENTS.EditTask />
            <COMPONENTS.DeleteTask />
          </div>
        </article>
      ))}
    </SListTask>
  );
};

export default ListTask;
