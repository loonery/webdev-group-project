import {createSlice} from "@reduxjs/toolkit";
import {createRecipeThunk} from "../services/recipes-thunks" ;

const initialState = {
    ingredients: [],
    loading: false,
    error: null
}

const ingredientSlice = createSlice(
    {
        name:'ingredientSlice',
        initialState,
        extraReducers: {

        },
        reducers: {}
    });

export default ingredientSlice.reducer;