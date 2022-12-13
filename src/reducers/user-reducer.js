import {createSlice} from "@reduxjs/toolkit";
import {
    findUserByIdThunk,
    loginUserThunk,
    logoutUserThunk,
    profileUserThunk,
    registerUserThunk
} from "../services/user-thunks";
import {findUserById} from "../services/user-services";

const userReducer = createSlice(
    {
        name: 'users',
        initialState: {
            loading: false,
            currentUser: null,
            authorById: null,
            error: null
        },
        extraReducers: {
            [profileUserThunk.fulfilled]: (state, action) => {
                state.currentUser = action.payload
                state.error = null
                state.loading = false;
            },
            [profileUserThunk.pending]: (state, action) => {
                state.loading = true
            },
            [profileUserThunk.rejected]: (state, action) => {
                state.error = 403
                state.currentUser = null
                state.loading = false
            },
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
            [findUserByIdThunk.fulfilled]: (state, action) => {
                state.authorById = action.payload
                state.error = null
                console.log(state.authorById)
            }
        },
        reducers: {}
    });

export default userReducer.reducer;