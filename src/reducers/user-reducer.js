import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "../services/user-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        currentUser: null
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }

})

export default usersReducer.reducer