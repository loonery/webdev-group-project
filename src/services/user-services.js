import axios from 'axios';
const USER_API = 'http://localhost:4000/api/users';

export const createUser = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data;
}

export const findUser = async (user) => {
    const response = await axios.get(`${USER_API}/${user.username}`);
    if (response.data.password === user.password)
        console.log("Success")
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