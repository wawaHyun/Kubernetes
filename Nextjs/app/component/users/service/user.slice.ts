import { createSlice } from "@reduxjs/toolkit"
import { deleteUserById, fetchAllUsers, findUserById, modifyUserById, findCountUsers, loginUser, joinUser } from "./user.service"
import { IUser } from "../model/user.model"

const userThunks = [fetchAllUsers]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface IAuth{
    message? : string,
    token? : string
}

interface userState {
    array? : Array<IUser>,
    json? : IUser,
    auth? : IAuth
}

export const initialState:userState = {
    array : [],
    json : {} as IUser,
    auth : {} as IAuth
}



export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;
        builder
            .addCase(fetchAllUsers.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(findUserById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(findCountUsers.fulfilled, (state: any, { payload }: any) => { state.count = payload })
            .addCase(modifyUserById.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(deleteUserById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(loginUser.fulfilled, (state: any, { payload }: any) => { state.auth = payload })
            .addCase(joinUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllUsers = (state: any) => state.user.array;
export const getFindUser = (state: any) => state.user.json;
export const getCountUser = (state: any) => state.user.count;
export const getAuth = (state: any) => state.user.auth;

export const { } = userSlice.actions

export default userSlice.reducer;
