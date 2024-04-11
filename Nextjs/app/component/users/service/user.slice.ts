import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user.inti"
import { deleteUserById, fetchAllUsers, findUserById, modifyUserById } from "./user.service"

const userThunks = [fetchAllUsers]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
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
            .addCase(modifyUserById.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(deleteUserById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllUsers = (state: any) => state.user.array;
export const getFindUser = (state: any) => state.user.json;
export const getModifyUser = (state: any) => state.user.array;
export const getDeleteUser = (state: any) => state.user.json;

export const { } = userSlice.actions

export default userSlice.reducer;
