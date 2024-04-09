import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user.inti"
import { fetchAllUsers, findUserById } from "./user.service"

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
    }
})

export const getAllUsers = (state: any) => state.user.array;
export const getFindUsers = (state: any) => state.user.json;


export const { } = userSlice.actions

export default userSlice.reducer;
