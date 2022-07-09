import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context';
import {
  getAllTask,
  addTasks,
  updateTasks,
  deleteTask,
} from '../../services/api';

const TaskProvider = ({ children }) => {
  const [idUpdated, setIdUpdated] = useState(0);
  const [idDeleted, setIdDeleted] = useState(0);
  const [modalIsOpenUpdate, setIsOpenUpdate] = useState(false);
  const [modalIsOpenDelete, setIsOpenDelete] = useState(false);
  const [lists, setLists] = useState([]);
  const [task, setTask] = useState('');
  const [statusTask, setStatusTask] = useState('');
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getAllTask().then((info) => setLists(info.data));
    }, 1000);
  }, [newTask, modalIsOpenUpdate, modalIsOpenDelete]);

  const handleTask = ({ target }) => setTask(target.value);
  const handleState = ({ target }) => setStatusTask(target.value);

  const addList = () => {
    addTasks(task, statusTask);
    setTask('');
    setStatusTask('');
    setNewTask(false);
  };

  const addNewTasks = () => setNewTask(true);

  const openModalUpdate = () => setIsOpenUpdate(true);
  const closeModalUpdate = () => setIsOpenUpdate(false);
  const openModalDelete = () => setIsOpenDelete(true);
  const closeModalDelete = () => setIsOpenDelete(false);

  const getIdUpdate = (id) => {
    setIdUpdated(id);
    openModalUpdate();
  };

  const getIdDelete = (id) => {
    setIdDeleted(id);
    openModalDelete();
  };

  const getDelete = () => {
    deleteTask(idDeleted);
    setIsOpenDelete(false);
  };

  const notDelete = () => setIsOpenDelete(false);

  const editTask = () => {
    updateTasks(idUpdated, task, statusTask);
    closeModalUpdate();
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    lists,
    setLists,
    task,
    setTask,
    statusTask,
    setStatusTask,
    handleTask,
    handleState,
    addList,
    addNewTasks,
    newTask,
    getIdUpdate,
    idUpdated,
    getIdDelete,
    getDelete,
    notDelete,
    editTask,
    modalIsOpenUpdate,
    openModalUpdate,
    closeModalUpdate,
    modalIsOpenDelete,
    closeModalDelete,
    openModalDelete,
  };

  return (
    <TaskContext.Provider value={ contextValue }>
      { children }
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  // https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
};

export default TaskProvider;
