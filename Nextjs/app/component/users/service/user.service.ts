import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserByIdAPI, fetchAllUsersAPI, findUserByIdAPI, modifyUserByIdAPI } from "./user.api";
import { IUser } from "../model/user.model";

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

export const modifyUserById: any = createAsyncThunk(
    'users/modifyUserById',
    async (id: IUser) => {
        console.log('수정하는 값 username : ' + JSON.stringify(id))
        const data: any = await modifyUserByIdAPI(id);
        return data;
    }
)


export const deleteUserById: any = createAsyncThunk(
    'users/deleteUserById',
    async (id: IUser) => {
        console.log('deleteUserById username : ' + id.username)
        const data: any = await deleteUserByIdAPI(id);
        return data;
    }
)