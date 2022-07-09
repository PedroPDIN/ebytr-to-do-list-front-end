import React, { useContext } from 'react';
import Modal from 'react-modal';
import TaskContext from '../../store/context';

Modal.setAppElement('#root');

const DeleteTask = () => {
  const {
    getDelete,
    notDelete,
    modalIsOpenDelete,
    closeModalDelete,
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
      isOpen={ modalIsOpenDelete }
      onRequestClose={ closeModalDelete }
      style={ customStyles }
      contentLabel="Example Modal"
    >
      <div>
        <button type="button" onClick={ getDelete }>Sim</button>
        <button type="button" onClick={ notDelete }>Não</button>
      </div>

    </Modal>
  );
};

export default DeleteTask;
