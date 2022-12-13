import {createAsyncThunk}  from "@reduxjs/toolkit";
import * as service from "./posts-service";

export const findPostsThunk = createAsyncThunk(
    'posts/findPosts', async () => await service.findPosts()
);


export const findUserAuthoredPostsThunk = createAsyncThunk(
    'posts/findUserAuthoredPosts', async (uid) =>
        await service.findPostsByAuthor(uid))