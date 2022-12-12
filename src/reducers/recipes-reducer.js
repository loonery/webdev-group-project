import {createSlice} from "@reduxjs/toolkit";
import {findRecipesThunk, findUserAuthoredRecipesThunk} from "../services/recipes-thunks";

const initialState = {
    recipes: [],
    recipesLoading: false
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
                },
            [findUserAuthoredRecipesThunk.rejected]:
                (state, { payload }) => {
                    state.loading = false
                    state.recipes = []
                },
        },
        reducers: {

        }
    });

export default recipeSlice.reducer;