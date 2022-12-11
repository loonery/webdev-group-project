import {createSlice} from "@reduxjs/toolkit";
import {findRecipesThunk, findUserAuthoredRecipesThunk} from "../services/recipes-thunks";
import {findUserAuthoredRecipes} from "../services/recipes-services";

const initialState = {
    recipes: [],
    loading: false
}

const recipeSlice = createSlice(
    {
        name: 'recipeSlice',
        initialState,
        extraReducers: {
            [findRecipesThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.recipes = payload
                },
            [findUserAuthoredRecipesThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.recipes = payload
                }
        },
        reducers: {

        }
    });

export default recipeSlice.reducer;