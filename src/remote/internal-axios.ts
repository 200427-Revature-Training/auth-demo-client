import Axios from 'axios';

export const internalAxios = Axios.create({
    baseURL: 'http://localhost:3005',
});
