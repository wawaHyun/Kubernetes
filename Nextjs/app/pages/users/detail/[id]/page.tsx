'use client'

import { MyTypography } from "@/app/component/common/module/cell"
import { findUserById } from "@/app/component/users/service/user.service"
import { getFindUser } from "@/app/component/users/service/user.slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserDetailPage(props: any) {
    const dispatch = useDispatch()
    const findUser = useSelector(getFindUser)



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

        user detail <br /> <br />
        <span>ID : </span> {MyTypography(props.params.id, "1,5rem")}
        <span>username :  {MyTypography(findUser.username, "1.5rem")}</span>
        <span>job : </span>{MyTypography(findUser.job, "1.5rem")}
        <span>등록일 : </span> {MyTypography(findUser.modDate, "1.5rem")}
        <span>수정일 : </span>{MyTypography(findUser.regDate, "1.5rem")}

    </>)
}