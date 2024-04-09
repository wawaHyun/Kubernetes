import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersAPI, findUserByIdAPI } from "./user.api";

export const fetchAllUsers: any = createAsyncThunk(
    'users/fetchAllUsers',
    async (page: number) => {
        console.log('fetchAllUsers page : ' + page)
        const data: any = await fetchAllUsersAPI(1);

        const { message, result }: any = data
        return data;
    }
)

export const findUserById: any = createAsyncThunk(
    'users/findUserById',
    async (id: number) => {
        console.log('findUserById id : ' + id)
        const data: any = await findUserByIdAPI(id);
        return data;
    }
)