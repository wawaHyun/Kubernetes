'use client'

import { MyTypography } from "@/app/component/style/cell";
import { findBoardById } from "@/redux/features/boards/service/board.service";
import { getFindBoard } from "@/redux/features/boards/service/board.slice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BoardDetailPage(props: any) {
    const dispatch = useDispatch()
    const findBoard = useSelector(getFindBoard)



    if (findBoard !== undefined) {
        console.log('findBoard is not undefined')

        console.log('length is ' + findBoard.length)
        for (let i = 0; i < findBoard.length; i++) {
            console.log(JSON.stringify(findBoard[i]))
        }
    } else {
        console.log('findBoard is undefined')
    }


    useEffect(() => {
        dispatch(findBoardById(props.params.id))
    }, [dispatch])

    return (<>

        board detail
        <span>ID : </span> <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {props.params.id} </Typography>
        <span>게시판이름 : </span> {MyTypography(findBoard.boardName, "1.5rem")}
        <span>게시판타입 : </span>{MyTypography(findBoard.boardType, "1.5rem")}
        <span>등록일 : </span> {MyTypography(findBoard.modDate, "1.5rem")}
        <span>수정일 : </span>{MyTypography(findBoard.regDate, "1.5rem")}

    </>)
}