import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllArticlesAPI, countArticlesAPI, deleteArticlesAPI, findArticlesAPI, modifyArticlesAPI } from "./article.api";
import { IUser } from "../../users/model/user.model";

export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async (page: number) => {
        console.log('fetchAllArticles page : ' + page)
        const data: any = await AllArticlesAPI(1);
        return data
    }
)

export const findArticleById: any = createAsyncThunk(
    'articles/findArticleById',
    async (id: number) => {
        console.log('findArticleById id : ' + id)
        const data: any = await findArticlesAPI(id);
        return data
    }
)

export const countArticleById: any = createAsyncThunk(
    'articles/countArticleById',
    async () => {
        console.log('countArticleById : count')
        const data: any = await countArticlesAPI();
        return data
    }
)



export const modifyArticleById: any = createAsyncThunk(
    'articles/modifyArticleById',
    async (props: IUser) => {
        console.log('modifyArticleById id : ' + props)
        const data: any = await modifyArticlesAPI(props);
        return data
    }
)

export const deleteArticleById: any = createAsyncThunk(
    'articles/deleteArticleById',
    async (id: number) => {
        console.log('deleteArticleById id : ' + id)
        const data: any = await deleteArticlesAPI(id);
        return data
    }
)