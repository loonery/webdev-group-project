import {createSlice} from "@reduxjs/toolkit";
import {createRecipeThunk} from "../services/recipes-thunks" ;

const initialState = {
    description: '',
    notes: '',
    ingredients: [],
    steps: [],
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
            }
        },
        reducers: {
            addRecipe(state, action) {
                return (state = action.payload);
            }
        }
    });

export default createRecipeSlice.reducer;