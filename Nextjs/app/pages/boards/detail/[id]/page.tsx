'use client'

import { findBoardById } from "@/app/component/boards/service/board.service";
import { getFindBoard } from "@/app/component/boards/service/board.slice";
import { MyTypography } from "@/app/component/common/module/cell";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BoardDetailPage(props: any) {
    const dispatch = useDispatch()
    const findBoard = useSelector(getFindBoard)

    useEffect(() => {
        dispatch(findBoardById(props.params.id))
    }, [dispatch])

    return (<>

        board detail <br /> <br />
        <span>ID : </span> {MyTypography(props.params.id,"1.5rem")} 
        <span>게시판이름 : </span> {MyTypography(findBoard.boardName, "1.5rem")}
        <span>게시판타입 : </span>{MyTypography(findBoard.boardType, "1.5rem")}
        <span>등록일 : </span> {MyTypography(findBoard.modDate, "1.5rem")}
        <span>수정일 : </span>{MyTypography(findBoard.regDate, "1.5rem")}

    </>)
}