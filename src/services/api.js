import axios from 'axios';

const api = axios.create({
    baseURL:"http://my-json-server.typicode.com/JoaquimAlvesFN/react-native-test"
    // baseURL:"http://jsonplaceholder.typicode.com"
});

export default api;