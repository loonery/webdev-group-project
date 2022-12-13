import {createSlice} from "@reduxjs/toolkit";
import {findPostsThunk, findUserAuthoredPostsThunk} from "../services/posts-thunks";


const initialState = {
    posts: [],
    loading: false
}

const postSlice = createSlice(
    {
        name: 'posts',
        initialState,
        extraReducers: {
            [findPostsThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.posts = payload
                },
            [findUserAuthoredPostsThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.posts = payload
                }
        },
        reducers: {

        }
    });

export default postSlice.reducer;