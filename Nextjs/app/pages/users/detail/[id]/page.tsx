'use client'

import { MyTypography } from "@/app/component/style/cell"
import { findUserById } from "@/redux/features/users/service/user.service"
import { getFindUsers } from "@/redux/features/users/service/user.slice"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserDetailPage(props: any) {
    const dispatch = useDispatch()
    const findUser = useSelector(getFindUsers)



    if (findUser !== undefined) {
        console.log('findUser is not undefined')

        console.log('length is ' + findUser.length)
        for (let i = 0; i < findUser.length; i++) {
            console.log(JSON.stringify(findUser[i]))
        }
    } else {
        console.log('findUser is undefined')
    }


    useEffect(() => {
        dispatch(findUserById(props.params.id))
    }, [dispatch])

    return (<>

        user detail
        <span>ID : </span> <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {props.params.id} </Typography>
        <span>username : </span> {MyTypography(findUser.username, "1.5rem")}
        <span>job : </span>{MyTypography(findUser.job, "1.5rem")}
        <span>등록일 : </span> {MyTypography(findUser.modDate, "1.5rem")}
        <span>수정일 : </span>{MyTypography(findUser.regDate, "1.5rem")}

    </>)
}