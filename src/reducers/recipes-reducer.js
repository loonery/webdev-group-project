import {createSlice} from "@reduxjs/toolkit";
import {findRecipesThunk} from "../services/recipes-thunks";

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
                }
        },
        reducers: {

        }
    });

export default recipeSlice.reducer;