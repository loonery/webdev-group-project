import {createSlice} from "@reduxjs/toolkit";
import {createRecipeThunk, deleteRecipeThunk, findRecipeThunk, updateRecipeThunk} from "../services/recipes-thunks";

const initialState = {
    recipes: [],
    loading: false
}

const recipeSlice = createSlice(
{
        name: 'recipeSlice',
        initialState,
        extraReducers: {
            [findRecipeThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.recipes = payload
                },
            [deleteRecipeThunk.fulfilled] :
                (state, { payload }) => {
                    state.loading = false
                    state.recipes = state.recipes.filter(recipe => recipe._id !== payload)
                },
            [createRecipeThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.recipes.push(payload)
                },
            [updateRecipeThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    const recipeIndex = state.recipes.findIndex((recipe) => recipe._id === payload._id)
                    state.recipes[recipeIndex] = {...state.recipes[recipeIndex], ...payload}
                }
        },
        reducers: {}
    });

export default recipeSlice.reducer;