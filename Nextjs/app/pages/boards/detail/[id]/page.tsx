'use client'

import { findBoardById } from "@/app/component/boards/service/board.service";
import { getFindBoard } from "@/app/component/boards/service/board.slice";
import { MyTypography } from "@/app/component/common/module/cell";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BoardDetailPage(props: any) {
    const dispatch = useDispatch()
    const findBoard = useSelector(getFindBoard)

    const [boardName,setBoardName] = useState();
    const [boardType,setBoardType] = useState();

    const handleBoardName = (e: any) => {
        setBoardName(e.target.value);
      }
      const handleBoardType = (e: any) => {
        setBoardType(e.target.value);
      }


      // const handleModify = () => {
      //   dispatch(modifyArticleById(props.params.id))
      //   alert('succseful modity');
      // }

    useEffect(() => {
        dispatch(findBoardById(props.params.id))
        // dispatch(modifyArticleById(props.params.id))
    }, [dispatch])

    return (<>

{MyTypography('board detail : '+ props.params.id,"1.5rem")}
        {MyTypography('ID : ' + props.params.id, "1.5rem")}
        {MyTypography('board name : ' + findBoard.boardName, "1.5rem")}
        {MyTypography(<input type="text" onChange={handleBoardName}/>,"1.5rem")}

        {MyTypography('board type : ' + findBoard.boardType, "1.5rem")}
        {MyTypography(<input type="text" onChange={handleBoardType}/>,"1.5rem")}
        {MyTypography('등록일 : ' + findBoard.modDate, "1.5rem")}

        <br />
    {/* {MyTypography(<button type="button" onClick={handleModify} > 수정</button>, "1.5rem")} */}

    </>)
}