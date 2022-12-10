import axios from 'axios';
const API_BASE = "http://localhost:4000/api"
const USER_API = `${API_BASE}/users`;

const api = axios.create({
    withCredentials: true
});

// export const signup = (user) =>
//     api.post(`${USER_API}/register`, user)
//         .then(response => response.data);

export const signup = async (user) => {
    const response = await api.post(`${USER_API}/register`, user);
    return response.data;

}


// export const login = (user) =>
//     api.post(`${USER_API}/login`, user)
//         .then(response => response.data);

export const login = async (user) => {
    const response = await api.post(`${USER_API}/login`, user)
    return response.data
}

// export const logout = (user) =>
//     api.post(`${USER_API}/logout`, user)
//         .then(response => response.data);

export const logout = async (user) => {
    const response = await api.post(`${USER_API}/logout`, user);
    return response.data;
}

// export const profile = () =>
//     api.post(`${USER_API}/profile`)
//         .then(response => response.data);

export const profile = async () => {
    const response = await api.post(`${USER_API}/profile`);
    return response.data;
}

export const findUser = async (user) => {
    const response = await axios.get(`${USER_API}/${user.username}`);
    return response.data;
}

/*
export const deleteUser = async (tid) => {
    const response = await axios
        .delete(`${USER_API}/${tid}`)
    return response.data
}

export const updateUser = async (tuit) => {
    await axios.put(`${USER_API}/${tuit.id}`, tuit);
    return tuit;
}
 */