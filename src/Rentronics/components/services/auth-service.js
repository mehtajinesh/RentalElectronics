import axios from "axios";
const API_URL = 'http://localhost:4000/api';

const api = axios.create({withCredentials:true});

export const register = async (user) => {
    const response = await api.post(`${API_URL}/register`, user);
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`);
    return response.data;
}

export const login = async (email, password) => {
    const response = await api.post(`${API_URL}/login`, {email, password});
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${API_URL}/logout`);
    return response.data;
}
