import axios from 'axios';

const endpoint = '7d5fa65583844246a48ea9b0f33569d4';

const api = axios.create({
  baseURL: `https://crudcrud.com/api/${endpoint}`,
  timeout: 1000,
});

export default api;
