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

export const createNote = (formData) => API.post('/notes', formData);

export const getNote = (page) => API.get(`/notes/get?page=${page}`);

export const deleteNote = (id) => API.delete(`/notes/delete/${id}`);

export const updateNote = (id, formData) => API.put(`/notes/update/${id}`, formData);

export const getOneNote = (id) => API.get(`/notes/get/${id}`);

export const register = (formData) => API.post('/user/register', formData);

export const addUserDetails = (formData) => API.post('/user/add', formData);