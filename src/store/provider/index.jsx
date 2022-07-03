import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context';

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState('');
  const [dateTask, setDateTask] = useState('');
  const [stateTask, setStateTask] = useState('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    task,
    setTask,
    dateTask,
    setDateTask,
    stateTask,
    setStateTask,
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
