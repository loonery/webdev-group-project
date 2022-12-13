import {createSlice} from "@reduxjs/toolkit";
import {
    updateRecipieIngredientsThunk,
    updateRecipieStepsThunk,
    createRecipeThunk,
    updateRecipieHeaderThunk,
    setCreatingRecipeThunk,
    exitCreatingRecipeThunk,
    exitCreatingCollectionThunk,
    createCollectionThunk,
    setCreatingCollectionThunk
} from "../services/recipes-thunks" ;

const initialState = {
    description: '',
    name: '',
    notes: '',
    ingredients: '',
    steps: '',
    recipes: [],
    collection: [],
    creating: false,
    creatingRecipe: false,
    creatingCollection: false,
    loading: false,
    error: null
}

const createRecipeSlice = createSlice(
    {
        name:'createRecipeSlice',
        initialState,
        extraReducers: {
            [setCreatingCollectionThunk.fulfilled]: (state, action) => {
                state.creating = true
                state.creatingCollection = true
                state.creatingRecipe = false
            },
            [setCreatingRecipeThunk.fulfilled]: (state, action) => {
                state.creating = true
                state.creatingCollection = false
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
            [exitCreatingCollectionThunk.fulfilled]: (state, action) => {
                state.loading = false
                state.recipes = []
                state.collection = []
                state.creating = false
                state.creatingCollection = false
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
            [createCollectionThunk.fulfilled]: (state, {payload}) => {
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