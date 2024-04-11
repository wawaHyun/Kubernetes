'use client'

import { deleteArticleById, findArticleById, modifyArticleById } from "@/app/component/articles/service/article.service";
import { getFindArticle } from "@/app/component/articles/service/article.slice";
import { MyTypography } from "@/app/component/common/module/cell";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function ArticleDetailPage(props: any) {
  const dispatch = useDispatch()
  const findArticle = useSelector(getFindArticle)

  const [title,setTitle] = useState();
  const [content,setContent] = useState();

  const handleTitle = (e: any) => {
      setTitle(e.target.value);
    }
    const handleContent = (e: any) => {
      setContent(e.target.value);
    }


    const handleModify = () => {
      const id = props.params.id
      const data = {id,title, content}
      console.log("handleModify before "+JSON.stringify(data))
      dispatch(modifyArticleById(data))
      console.log("handleModify end "+JSON.stringify(data))
    }

  const handleDelete = () => {
    dispatch(deleteArticleById(props.params.id))
  }

  useEffect(() => {
    dispatch(findArticleById(props.params.id))
  }, [dispatch])

  return (<>
    {MyTypography('article detail : ' + props.params.id, "1.5rem")}

    Title : 
    {MyTypography(<input type="text" name='title' placeholder={findArticle.title} onChange={handleTitle} />, "1.5rem")}

Content : 
    {MyTypography(<input type="text" name='content' placeholder={findArticle.content} onChange={handleContent} />, "1.5rem")}

    {MyTypography('modDate : ' + findArticle.modDate, "1.5rem")}
    {MyTypography('regDate : ' + findArticle.regDate, "1.5rem")}

    <br />
    {MyTypography(<button type="button" onClick={handleModify} > 수정</button>, "1.5rem")}
    {MyTypography(<button type="button" onClick={handleDelete} > 삭제</button>, "1.5rem")}
  </>)
}