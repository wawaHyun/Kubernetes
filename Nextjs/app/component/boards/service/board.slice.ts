
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './board.init';
import { fetchAllBoards, findBoardById } from './board.service';

const boardThunks = [fetchAllBoards]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        console.log('------------------ conclusion ---------------')
        builder //해당되는 객체가 들어오면 그때만 만들어짐. swich case.
            .addCase(fetchAllBoards.fulfilled, (state: any, { payload }: any) => { state.array = payload }) //all list
            .addCase(findBoardById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

// getter
export const getAllBoards = (state: any) => state.board.array;

export const getFindBoard = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.board.json))
    return state.board.json; //board는 reducer에서 나온 것. 
}

export const { } = boardSlice.actions

export default boardSlice.reducer;
