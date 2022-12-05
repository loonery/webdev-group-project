import axios from 'axios';

// TUITS_API is a constant referring to our middle tier
const API_BASE = process.env.REACT_APP_API_BASE;
const RECIPE_API = `${API_BASE}/recipes`;

// the asynchronous functions take advantage of multi-threading capability
export const createRecipe = async (recipeCollection) => {
    const response = await axios.post(RECIPE_API, recipeCollection)
    return response.data;
}

export const findRecipe = async () => {
    const response = await axios.get(RECIPE_API);
    const tuits = response.data;    // data in this response is the tuits array
    return tuits;                   // return the tuits array
}

export const deleteRecipe = async (cid) => {
    const response = await axios.delete(`${RECIPE_API}/${cid}`)
    return response.data;
}

export const updateRecipe = async (recipeCollection) => {
    const response = await axios.put(`${RECIPE_API}/${recipeCollection._id}`, recipeCollection)
    return recipeCollection;
}