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