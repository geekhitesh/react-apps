import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://some-sample-url/'
});

export default instance;