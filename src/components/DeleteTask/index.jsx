import React, { useContext } from 'react';
import Modal from 'react-modal';
import TaskContext from '../../store/context';
import SDeleteTask from './styled';

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
      backgroundColor: '#7d827f',
      borderRadius: '20px',
      padding: '20px',
    },
  };

  return (
    <Modal
      isOpen={ modalIsOpenDelete }
      onRequestClose={ closeModalDelete }
      style={ customStyles }
      contentLabel="Example Modal"
    >
      <SDeleteTask>
        <button type="button" onClick={ getDelete }>Sim</button>
        <button type="button" onClick={ notDelete }>Não</button>
      </SDeleteTask>

    </Modal>
  );
};

export default DeleteTask;
