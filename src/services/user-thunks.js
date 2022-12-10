import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-services"

export const findUserThunk = createAsyncThunk(
    'users/findUser', async (username) => await service.findUser(username)
)

export const loginThunk = createAsyncThunk(
    'users/login', async (user) => await service.login(user)
);

export const logoutThunk = createAsyncThunk(
    'users/logout', async (user) => await service.logout(user)
);

export const profileThunk = createAsyncThunk(
    'users/profile', async () => await service.profile()
);

export const signupThunk = createAsyncThunk(
    'users/signup', async (user) => await service.signup(user)
);

