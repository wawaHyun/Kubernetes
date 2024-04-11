
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { countArticleById, deleteArticleById, fetchAllArticles, findArticleById ,modifyArticleById} from './article.service';

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(fetchAllArticles.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(findArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(countArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(modifyArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(deleteArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload }) 
    }
})


export const getAllArticles = (state: any) => state.article.array;
export const getFindArticle = (state: any) => state.article.json;
export const getcountArticle = (state:any) => state.article

export const { } = articleSlice.actions

export default articleSlice.reducer;
