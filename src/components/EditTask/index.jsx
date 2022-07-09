import React, { useContext } from 'react';
import Modal from 'react-modal';
import TaskContext from '../../store/context';
import SFormNewTask from './styled';

Modal.setAppElement('#root');

const EditTask = () => {
  const {
    task,
    handleTask,
    handleState,
    editTask,
    modalIsOpenUpdate,
    closeModalUpdate,
  } = useContext(TaskContext);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={ modalIsOpenUpdate }
      onRequestClose={ closeModalUpdate }
      style={ customStyles }
      contentLabel="Example Modal"
    >
      <SFormNewTask>
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

        <div className="newTask-buttons">
          <button type="button" onClick={ editTask }>Alterar</button>
          <button type="button" onClick={ closeModalUpdate }>Cancelar</button>
        </div>
      </SFormNewTask>
    </Modal>
  );
};

export default EditTask;
