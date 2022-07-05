import axios from 'axios';

const URL = 'https://to-do-list-112233.herokuapp.com';

const getAllTask = () => axios.get(`${URL}/tasks`)
  .then((data) => data)
  .catch((error) => console.log(error));

export default getAllTask;
