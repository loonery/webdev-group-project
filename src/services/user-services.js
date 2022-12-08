import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/users`;

export const createUser = async (user) => {
    const response = await axios.post(TUITS_API, user)
    return response.data;
}

export const findUser = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteUser = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateUser = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit.id}`, tuit);
    return tuit;
}