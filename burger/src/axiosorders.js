import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-8a018.firebaseio.com/'
})

export default instance;