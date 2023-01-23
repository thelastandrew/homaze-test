import axios from 'axios';

const baseURL = 'https://mocki.io/v1/75cdd936-527f-493c-a013-71c0db8ec5cf';
const API = axios.create({ baseURL });

export const getProjects = () => API.get()
  .then((respond) => console.log(respond.data))
  .catch((e) => {
    throw e;
  });
