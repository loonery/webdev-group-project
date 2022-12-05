import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from "./recipes-services"

export const findRecipeThunk = createAsyncThunk(
    'recipes/findRecipes', async () => await service.findRecipes()
)

export const deleteRecipeThunk = createAsyncThunk(
    'recipes/deleteRecipe', async (recipeID) => {
        await service.deleteRecipe(recipeID);
        return recipeID;                      // return the tuitID so that we can remove it from the store
    }
)

export const createRecipeThunk = createAsyncThunk(
    'recipes/createRecipe',
    async (recipe) => await service.createRecipe(recipe)
)

export const updateRecipeThunk = createAsyncThunk(
    'recipes/updateRecipe',
    async (recipe) => await service.updateRecipe(recipe)
)