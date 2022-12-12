import {createSlice} from "@reduxjs/toolkit";
import {updateRecipieIngredientsThunk, updateRecipieStepsThunk, createRecipeThunk, updateRecipieHeaderThunk} from "../services/recipes-thunks" ;

const initialState = {
    description: '',
    name: '',
    notes: '',
    ingredients: '',
    steps: '',
    loading: false,
    error: null
}

const createRecipeSlice = createSlice(
    {
        name:'createRecipeSlice',
        initialState,
        extraReducers: {
            [createRecipeThunk.fulfilled]: (state, {payload}) => {
                state.loading = false
                state.description = payload.description
                state.notes = payload.notes
                state.ingredients = payload.ingredients
                state.steps = payload.steps
            },
            [createRecipeThunk.pending]: (state, action) => {
                state.loading = true
            },
            [createRecipeThunk.rejected]: (state, action) => {
                state.error = 403
                state.loading = false
            },
            [updateRecipieHeaderThunk.fulfilled]: (state, {payload}) => {
                state.name = payload.name;
                state.description = payload.description;
                state.notes = payload.notes;
            },
            [updateRecipieIngredientsThunk.fulfilled]: (state, {payload}) => {
                state.ingredients = payload
            },
            [updateRecipieStepsThunk.fulfilled]: (state, {payload}) => {
                state.steps = payload
            }
        },
        reducers: {
            addRecipe(state, action) {
                return (state = action.payload);
            }
        }
    });

export default createRecipeSlice.reducer;