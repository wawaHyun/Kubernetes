'use client'

import { findArticleById } from "@/app/component/articles/service/article.service";
import { getFindArticle } from "@/app/component/articles/service/article.slice";
import { MyTypography } from "@/app/component/common/module/cell";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"

export default function ArticleDetailPage(props: any) {
    const dispatch = useDispatch()
    const findArticle = useSelector(getFindArticle)


    useEffect(() => {
        dispatch(findArticleById(props.params.id))
    },[dispatch])

    return (<>
        <h2>article detail {props.params.id}</h2>
        {MyTypography('title : '+findArticle.title, "1.5rem")}
        {MyTypography('content : '+findArticle.content, "1.5rem")}
        {MyTypography('modDate : '+findArticle.modDate, "1.5rem")}
        {MyTypography('regDate : '+findArticle.regDate, "1.5rem")}
    </>)
}