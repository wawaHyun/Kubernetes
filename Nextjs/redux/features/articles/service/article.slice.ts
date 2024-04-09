
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { fetchAllArticles } from './article.service';

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

// setter
const handleFulfilled = (state: any, { payload }: any) => { //java에서 list로 던져준 값을 가져왔음
    console.log('------------------ conclusion ---------------')
    state.array = payload //java에서 list로 던져준 값을 가져와서 [ ] 배열형식에 넣음.
    console.log("111 " + state.array)
}

const handlePending = (state: any) => {

}

const handleRejected = (state: any) => {

}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder //해당되는 객체가 들어오면 그때만 만들어짐. swich case.
            .addCase(fetchAllArticles.fulfilled, handleFulfilled) //fetchAllArticles.fulfilled 이면 handleFulfilled 작동

    }
})

// getter
export const getAllArticles = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array))
    return state.article.array; //article는 reducer에서 나온 것. 
}

export const { } = articleSlice.actions

export default articleSlice.reducer;
