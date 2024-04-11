import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllBoardsAPI, findBoardsAPI } from "./board.api";

export const fetchAllBoards: any = createAsyncThunk(
    'boards/fetchAllBoards',
    async (page: number) => {
        console.log('fetchAllBoards page : ' + page)
        const data: any = await AllBoardsAPI(1);

        // const { message, result }: any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)


export const findBoardById: any = createAsyncThunk(
    'boards/findBoardById',
    async (id: number) => {
        console.log('findBoardById page : ' + id)
        const data: any = await findBoardsAPI(id);

        return data
    }
)