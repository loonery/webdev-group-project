import {createSlice} from "@reduxjs/toolkit";
import {
    updateRecipieIngredientsThunk,
    updateRecipieStepsThunk,
    createRecipeThunk,
    updateRecipieHeaderThunk,
    setCreatingRecipeThunk, exitCreatingRecipeThunk
} from "../services/recipes-thunks" ;

const initialState = {
    description: '',
    name: '',
    notes: '',
    ingredients: '',
    steps: '',
    creating: false,
    creatingRecipe: false,
    loading: false,
    error: null
}

const createRecipeSlice = createSlice(
    {
        name:'createRecipeSlice',
        initialState,
        extraReducers: {
            [setCreatingRecipeThunk.fulfilled]: (state, action) => {
                state.creating = true
                state.creatingRecipe = true
            },
            [exitCreatingRecipeThunk.pending]: (state, action) => {
                state.loading = true
            },
            [exitCreatingRecipeThunk.fulfilled]: (state, action) => {
                state.loading = false
                state.name = ''
                state.description = ''
                state.notes = ''
                state.ingredients = ''
                state.steps = ''
                state.creating = false
                state.creatingRecipe = false
            },
            [createRecipeThunk.fulfilled]: (state, {payload}) => {
                state.loading = false
                state.name = ''
                state.description = ''
                state.notes = ''
                state.ingredients = ''
                state.steps = ''
                state.creating = false
                state.creatingRecipe = false
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