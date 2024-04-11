'use client'
import userColumns from "@/app/component/users/modul/columns";
import { fetchAllUsers } from "@/app/component/users/service/user.service";
import { getAllUsers } from "@/app/component/users/service/user.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BorderAll } from "@mui/icons-material";

const AllusersPage: NextPage = () => {
    const dispatch = useDispatch()
    const allUsers: [] = useSelector(getAllUsers)

    if (allUsers !== undefined) {
        console.log('allUsers is not undefined')

        console.log('length is ' + allUsers.length)
        for (let i = 0; i < allUsers.length; i++) {
            console.log(JSON.stringify(allUsers[i]))
        }
    } else {
        console.log('allUsers is undefined')
    }


    useEffect(() => {
        dispatch(fetchAllUsers(1))
    }, [dispatch])

    return (<>
        <h2>개인페이지 ALL users</h2>

        <div style={{ height: "100%", width: "100%" }}>
            {allUsers && <DataGrid// 🔥 4
                rows={allUsers}
                columns={userColumns()}
                pageSizeOptions={[5, 10, 20, 100]} // 4-1
                checkboxSelection
            />}
        </div>

    </>)
}

export default AllusersPage