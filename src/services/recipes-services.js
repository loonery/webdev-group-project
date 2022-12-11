import axios from 'axios';

// RECIPE_API is a string referring to our middle tier
const API_BASE = 'http://localhost:4000/api';
const RECIPE_API = `${API_BASE}` + '/recipes';

// the asynchronous functions take advantage of multi-threading capability
export const createRecipe = async (recipe) => {
    const response = await axios.post(RECIPE_API, recipe)
    return response.data;
}

export const findRecipes = async () => {
    const response = await axios.get(RECIPE_API);
    const recipes = response.data;    // data in this response is the recipes array
    console.log(recipes);
    return recipes;                   // return the recipes array
}

export const findUserAuthoredRecipes = async (uid) => {
    const response = await axios.get(`${RECIPE_API}/${uid}`)
    return response.data
}

export const deleteRecipe = async (rid) => {
    const response = await axios.delete(`${RECIPE_API}/${rid}`)
    return response.data;
}

export const updateRecipe = async (recipe) => {
    const response = await axios.put(`${RECIPE_API}/${recipe._id}`, recipe)
    return recipe;
}

