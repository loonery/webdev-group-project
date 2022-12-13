import axios from 'axios';

// RECIPE_API is a string referring to our middle tier
// const API_BASE = process.env.COFFEE_APP_API_BASE;
// const RECIPE_API = "http://29b3-155-33-134-27.ngrok.io/api/coffees";

const API_BASE = "http://localhost:4000/api";
const RECIPE_API = `${API_BASE}/recipes`;
const COLLECTION_API = `${API_BASE}/collections`;


// // the asynchronous functions take advantage of multi-threading capability
// export const createRecipe = async (recipe) => {
//     const response = await axios.post(RECIPE_API, recipe)
//     return response.data;
// }

const api = axios.create({
    withCredentials: true
});

export const findRecipes = async () => {
    const response = await axios.get(RECIPE_API);
    const recipes = response.data;    // data in this response is the recipes array
    console.log(recipes);
    return recipes;                   // return the recipes array
}

export const createRecipe = async (recipe) => {
    const response = await axios.post(RECIPE_API, recipe);
    return response.data
    // const response = api.post(RECIPE_API, recipe)
    //     .then(response => response.data);
}

export const createCollection = async (collection) => {
    const response = await axios.post(COLLECTION_API, collection);
    return response.data
    // const response = api.post(RECIPE_API, recipe)
    //     .then(response => response.data);
}

export const updateCreating = async () => {
    return true;
}

export const updateCreatingCollection = async () => {
    return true;
}

export const updateExitCreating = async () => {
    return true;
}

export const updateExitCreatingCollection = async () => {
    return true;
}


export const updateRecipieHeader = async (header) => {
    return header;
}

export const updateRecipieIngredients = async (ingredients) => {
    return ingredients;
}

export const updateRecipieSteps = async (steps) => {
    return steps;
}



// export const deleteRecipe = async (rid) => {
//     const response = await axios.delete(`${RECIPE_API}/${rid}`)
//     return response.data;
// }

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
// export const updateRecipe = async (recipe) => {
//     const response = await axios.put(`${RECIPE_API}/${recipe._id}`, recipe)
//     return recipe;
// }