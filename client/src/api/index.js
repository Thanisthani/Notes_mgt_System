import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8800" });

export const logIn = (formData) => API.post('/auth/login', formData);

export const signUP = (formData) => API.post('/user', formData);