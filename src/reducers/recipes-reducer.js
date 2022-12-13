import {createSlice} from "@reduxjs/toolkit";
import {findRecipeByIdThunk, findRecipesThunk, findUserAuthoredRecipesThunk} from "../services/recipes-thunks";
import {findUserAuthoredRecipes} from "../services/recipes-services";

const initialState = {
    recipes: [],
    recipe: {},
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
            // find recipes by recipe id thunk
            [findRecipeByIdThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.recipe = payload
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