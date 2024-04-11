'use client'

import boardColumns from "@/app/component/boards/modul/columns";
import { fetchAllBoards } from "@/app/component/boards/service/board.service";
import { getAllBoards } from "@/app/component/boards/service/board.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllboardsPage: NextPage = () => {
    const dispatch = useDispatch()
    const allBoards: [] = useSelector(getAllBoards)

    if (allBoards !== undefined) {
        console.log('allBoards is not undefined')

        console.log('length is ' + allBoards.length)
        for (let i = 0; i < allBoards.length; i++) {
            console.log(JSON.stringify(allBoards[i]))
        }
    } else {
        console.log('allBoards is undefined')
    }


    useEffect(() => {
        dispatch(fetchAllBoards(1))
    }, [dispatch])

    return (<>
        <h2>개인페이지 ALL boards</h2>

        <div style={{ height: "100%", width: "100%" }}>
            {allBoards && <DataGrid// 🔥 4
                rows={allBoards}
                columns={boardColumns()}
                pageSizeOptions={[5, 10, 20, 100]} // 4-1
                checkboxSelection
            />}
        </div>
    </>)
}

export default AllboardsPage