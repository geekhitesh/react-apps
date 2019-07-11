import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://khyaal-react.firebaseio.com'
    baseURL: 'http://localhost:9001/'

    
});

export default instance;