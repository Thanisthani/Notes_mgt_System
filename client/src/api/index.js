import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8800" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile'))
    {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const logIn = (formData) => API.post('/auth/login', formData);

export const signUP = (formData) => API.post('/user', formData);

export const getAll = () => API.get('/user');