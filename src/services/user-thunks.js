import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-services"

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) =>
        await service.createUser(user))

export const findUserThunk = createAsyncThunk(
    'users/findUsers', async (user) => {
        await service.findUser(user);
    }
)

export const registerUserThunk = createAsyncThunk(
    'users/loginUser', async (user) => {
        await service.signup(user);
    }
)

export const loginUserThunk = createAsyncThunk(
    'users/loginUser', async (user) => {
        console.log(user)
        await service.login(user);
    }
)

export const logoutUserThunk = createAsyncThunk(
    'users/loginUser', async (user) => {
        await service.logout(user);
    }
)

export const profileUserThunk = createAsyncThunk(
    'users/loginUser', async (user) => {
        await service.profile(user);
    }
)
