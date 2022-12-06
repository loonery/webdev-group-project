import axios from 'axios';

// RECIPE_API is a string referring to our middle tier
const API_BASE = process.env.COFFEE_APP_API_BASE;
const RECIPE_API = "http://29b3-155-33-134-27.ngrok.io/api/coffees";

// // the asynchronous functions take advantage of multi-threading capability
// export const createRecipe = async (recipe) => {
//     const response = await axios.post(RECIPE_API, recipe)
//     return response.data;
// }

export const findRecipes = async () => {
    const response = await axios.get(RECIPE_API);
    const recipes = response.data;    // data in this response is the recipes array
    console.log(recipes);
    return recipes;                   // return the recipes array
}

// export const deleteRecipe = async (rid) => {
//     const response = await axios.delete(`${RECIPE_API}/${rid}`)
//     return response.data;
// }


// export const updateRecipe = async (recipe) => {
//     const response = await axios.put(`${RECIPE_API}/${recipe._id}`, recipe)
//     return recipe;
// }