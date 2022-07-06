import axios from 'axios';

// const URL = 'https://to-do-list-112233.herokuapp.com';
const URL_EXEMPLE = 'http://localhost:3000';

const addTasks = (task, status) => {
  const newTask = { task, status };
  axios.post(`${URL_EXEMPLE}/tasks`, newTask);
};

const getAllTask = () => {
  axios.get(`${URL_EXEMPLE}/tasks`)
    .then((data) => data)
    .catch((error) => console.log(error));
};

const updateTasks = (id, task, status) => {
  const newTask = { task, status };
  axios.put(`${URL_EXEMPLE}/tasks/${id}`, newTask);
};

export {
  getAllTask,
  addTasks,
  updateTasks,
};
