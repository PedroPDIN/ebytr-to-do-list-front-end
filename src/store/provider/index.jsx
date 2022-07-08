import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context';
import { getAllTask, addTasks } from '../../services/api';

const TaskProvider = ({ children }) => {
  const [idUpdated, setIdUpdated] = useState(0);
  const [idDelete, setIdDelete] = useState(0);
  const [lists, setLists] = useState([]);
  const [task, setTask] = useState('');
  const [dateTask, setDateTask] = useState('');
  const [stateTask, setStateTask] = useState('');
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getAllTask().then((info) => setLists(info.data));
    }, 1000);
  }, [newTask]);

  const handleTask = ({ target }) => setTask(target.value);
  const handleState = ({ target }) => setStateTask(target.value);

  const getIdUpdate = (id) => {
    setIdUpdated(id);
  };

  const getIdDelete = (id) => {
    setIdDelete(id);
  };

  const addList = () => {
    addTasks(task, stateTask);
    setTask('');
    setStateTask('');
    setNewTask(false);
  };

  const addNewTasks = () => setNewTask(true);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    lists,
    setLists,
    task,
    setTask,
    dateTask,
    setDateTask,
    stateTask,
    setStateTask,
    handleTask,
    handleState,
    addList,
    addNewTasks,
    newTask,
    getIdUpdate,
    idUpdated,
    getIdDelete,
    idDelete,
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
