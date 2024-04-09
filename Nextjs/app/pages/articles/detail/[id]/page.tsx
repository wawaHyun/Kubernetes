'use client'

import { MyTypography } from "@/app/component/style/cell"
import { findArticleById } from "@/redux/features/articles/service/article.service"
import { getFindArticles } from "@/redux/features/articles/service/article.slice"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function ArticleDetailPage(props: any) {
    const dispatch = useDispatch()
    const findArticle = useSelector(getFindArticles)



    if (findArticle !== undefined) {
        console.log('findArticle is not undefined')

        console.log('length is ' + findArticle.length)
        for (let i = 0; i < findArticle.length; i++) {
            console.log(JSON.stringify(findArticle[i]))
        }
    } else {
        console.log('findArticle is undefined')
    }


    useEffect(() => {
        dispatch(findArticleById(props.params.id))
    }, [dispatch])

    return (<>

        article detail
        <span>ID : </span> <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {props.params.id} </Typography>
        <span>title : </span> {MyTypography(findArticle.title, "1.5rem")}
        <span>content : </span>{MyTypography(findArticle.content, "1.5rem")}
        <span>등록일 : </span> {MyTypography(findArticle.modDate, "1.5rem")}
        <span>수정일 : </span>{MyTypography(findArticle.regDate, "1.5rem")}

    </>)
}