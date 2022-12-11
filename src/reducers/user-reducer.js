import {createSlice} from "@reduxjs/toolkit";
import {loginUserThunk, logoutUserThunk, registerUserThunk} from "../services/user-thunks";

const userReducer = createSlice(
    {
        name: 'users',
        initialState: {
            loading: false,
            users: [],
            currentUser: null,
            error: null
        },
        extraReducers: {
            [registerUserThunk.fulfilled]: (state, action) => {
                    state.currentUser = action.payload
                    state.error = null
                },
            [registerUserThunk.rejected]: (state, action) => {
                    state.error = 403
                    state.currentUser = null
                },
            [logoutUserThunk.fulfilled]: (state, action) => {
                    state.currentUser = null
            },
            [loginUserThunk.fulfilled]: (state, action) => {
                    state.currentUser = action.payload
                    state.error = null
                },
            [loginUserThunk.rejected]: (state, action) => {
                    state.error = 403
                    state.currentUser = null
                },
        },
        reducers: {}
    });

export default userReducer.reducer;