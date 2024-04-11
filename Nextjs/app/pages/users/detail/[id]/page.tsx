'use client'

import { MyTypography } from "@/app/component/common/module/cell"
import { IUser } from "@/app/component/users/model/user.model"
import { initialState } from "@/app/component/users/service/user.inti"
import { deleteUserById, findUserById, modifyUserById } from "@/app/component/users/service/user.service"
import { getFindUser } from "@/app/component/users/service/user.slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserDetailPage(props: any) {
    const dispatch = useDispatch()
    const findUser = useSelector(getFindUser)

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [job, setJob] = useState('')
  
    const handleUsername = (e: any) => {
      setusername(e.target.value);
    }
    const handlePassword = (e: any) => {
      setpassword(e.target.value);
    }
    const handleName = (e: any) => {
      setName(e.target.value);
    }
    const handlePhone = (e: any) => {
      setPhone(e.target.value);
    }
    const handleJob = (e: any) => {
      setJob(e.target.value);
    }
  
    
    const handleModify = () => { 
      const id = props.params.id
      const data = {id, username, password, name, phone, job}
      console.log("handleModify : "+JSON.stringify(data));
      dispatch(modifyUserById(data)) 
    }

    const handleDelete = () => { 
      dispatch(deleteUserById(props.params.id))
    }

    useEffect(() => { 
        dispatch(findUserById(props.params.id))
    }, [dispatch])

    return (<>

{MyTypography('user detail : '+ props.params.id,"1.5rem")}
        {findUser.id &&<>
       {MyTypography('ID : ' +props.params.id, "1.5rem")} 

        {MyTypography(  <input type="text" name='username' placeholder={findUser.username} onChange={handleUsername}/>,"1.5rem")}   

        {MyTypography(<input type="text" name='password' placeholder={findUser.password} onChange={handlePassword}/>,"1.5rem")}   

        {MyTypography(<input type="text" name='name' placeholder={findUser.name} onChange={handleName}/>,"1.5rem")}   

        {MyTypography(<input type="text" name='phone' placeholder={findUser.phone} onChange={handlePhone}/>,"1.5rem")}   

        {MyTypography(<input type="text" name='job' placeholder={findUser.job} onChange={handleJob}/>,"1.5rem")}   

        {MyTypography('등록일 : ' +findUser.modDate, "1.5rem")}
        {MyTypography('수정일 : ' +findUser.regDate, "1.5rem")}

        <br />
    {MyTypography(<button type="button" onClick={handleModify} > 수정</button>, "1.5rem")}
    {MyTypography(<button type="button" onClick={handleDelete} > 삭제</button>, "1.5rem")}
        </>
}
    </>)
}