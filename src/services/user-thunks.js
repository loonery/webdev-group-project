import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-services"

export const findUserThunk = createAsyncThunk(
    'users/findUsers', async (user) => await service.findUser(user)
)

export const registerUserThunk = createAsyncThunk(
    'users/registerUser', async (user) => await service.signup(user)
)

export const loginUserThunk = createAsyncThunk(
    'users/loginUser', async (user) => await service.login(user)
)

export const logoutUserThunk = createAsyncThunk(
    'users/logoutUser', async (user) => await service.logout(user)
)

export const profileUserThunk = createAsyncThunk(
    'users/profileUser', async (user) => await service.profile(user)
)
