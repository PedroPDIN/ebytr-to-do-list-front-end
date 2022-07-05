import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context';
import { getAllTask, addTasks } from '../../services/api';

const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [task, setTask] = useState('');
  const [dateTask, setDateTask] = useState('');
  const [stateTask, setStateTask] = useState('');
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    getAllTask().then((info) => setLists(info.data));
  }, [lists]);

  const handleTask = ({ target }) => setTask(target.value);
  const handleState = ({ target }) => setStateTask(target.value);

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
