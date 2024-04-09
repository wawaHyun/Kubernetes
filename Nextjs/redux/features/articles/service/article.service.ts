import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllArticlesAPI, findArticlesAPI } from "./article.api";
import { findUserByIdAPI } from "../../users/service/user.api";

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