import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from "./recipes-services"
import {
    createRecipe,
    updateCreating, updateExitCreating,
    updateRecipieHeader,
    updateRecipieIngredients,
    updateRecipieSteps
} from "./recipes-services";

export const findRecipesThunk = createAsyncThunk(
    'recipes/findRecipes', async () => await service.findRecipes()
)

export const createRecipeThunk = createAsyncThunk(
    'createRecipe',
    async (recipe) => await createRecipe(recipe)
)

export const setCreatingRecipeThunk = createAsyncThunk('setCreateRecipe', async() => await updateCreating());

export const exitCreatingRecipeThunk = createAsyncThunk('exitCreateRecipe', async() => await updateExitCreating());

export const updateRecipieHeaderThunk = createAsyncThunk('updateName', async(header) => await updateRecipieHeader(header))

export const updateRecipieIngredientsThunk = createAsyncThunk('updateIngredients', async(ingredients) => await updateRecipieIngredients(ingredients))

export const updateRecipieStepsThunk = createAsyncThunk('updateSteps', async(steps) => await updateRecipieSteps(steps))


export const findUserAuthoredRecipesThunk = createAsyncThunk (
    'recipes/findUserAuthoredRecipes',
    async (user) => await service.findUserAuthoredRecipes(user)
)

// export const deleteRecipeThunk = createAsyncThunk(
//     'recipes/deleteRecipe', async (recipeID) => {
//         await service.deleteRecipe(recipeID);
//         return recipeID;                      // return the tuitID so that we can remove it from the store
//     }
// )
//
// export const createRecipeThunk = createAsyncThunk(
//     'recipes/createRecipe',
//     async (recipe) => await service.createRecipe(recipe)
// )
//
// export const updateRecipeThunk = createAsyncThunk(
//     'recipes/updateRecipe',
//     async (recipe) => await service.updateRecipe(recipe)
// )