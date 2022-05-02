import axios from "axios";
const USER_API = 'http://localhost:4000/api/users'
// const USER_API = process.env.LOCAL_DB_API + '/users';

export const findAllUsers = async () => {
    const response = await axios.get(USER_API);
    const users = response.data;
    return users;
};

export const findUserById = async (uid) => {
    const response = await axios.get(`${USER_API}/${uid}`)
    return response.data;
};

export const findUsersByEmail = async (email) => {
    const response = await axios.get(`${USER_API}/email/${email}`)
    return response.data;
};

export const findUserByCredentials = async (credentials) => {
    const response = await axios.post(`${USER_API}/credentials`, credentials);
    return response.data;
};


export const createUser = async (user) => {
    const response = await axios.post(USER_API, user);
    return response.data;
};

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USER_API}/${uid}`)
    return response.data;
};

export const updateUser = async (uid, user) => {
    const response = await axios.put(`${USER_API}/${uid}`, user);
    return response.data;
};