import React, { useContext } from 'react';
import Modal from 'react-modal';
import TaskContext from '../../store/context';

Modal.setAppElement('#root');

const EditTask = () => {
  const {
    task,
    handleTask,
    handleState,
    editTask,
    modalIsOpen,
    closeModal,
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
      isOpen={ modalIsOpen }
      onRequestClose={ closeModal }
      style={ customStyles }
      contentLabel="Example Modal"
    >
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
          <button type="button" onClick={ editTask }>Alterar</button>
          <button type="button" onClick={ closeModal }>Cancelar</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTask;
