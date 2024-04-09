import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllArticlesAPI } from "./article.api";

export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async (page: number) => {
        console.log('fetchAllArticles page : ' + page)
        const data: any = await AllArticlesAPI(1);

        const { message, result }: any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)