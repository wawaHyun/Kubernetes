'use client';

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AxiosConfig from "@/app/component/common/configs/axios-config";
import { API } from "@/app/component/common/enums/API";
import { PG } from "@/app/component/common/enums/PG";
import { NextPage } from "next";

const Join: NextPage = () => {

  const router = useRouter();

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

  const handleSubmit = () => {

    axios.post(`${API.SERVER}/api/users/save`, { username, password, name, phone, job }
      , AxiosConfig())
      .then(res => {
        alert(JSON.stringify(res.data))
        router.push(`${PG.USER}/login`)
      })
  }
  const handleCancel = () => {
    alert('Ok, back to main..');
  }


  return (<>
    <div className="container">
      <h1>개인 페이지~!!!!!</h1>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />   <br />

      <label htmlFor="memId"><b>ID</b></label><br />
      <input type="text" placeholder="Enter ID" name="id" onChange={handleUsername} required />
      <br /><br />
      <label htmlFor="memPw"><b>Password</b></label><br />
      <input type="password" placeholder="Enter Password" name="memPw" onChange={handlePassword} required />
      <br /><br />
      <label htmlFor="name"><b>NAME</b></label><br />
      <input type="text" placeholder="Enter name" name="name" onChange={handleName} required />
      <br /><br />
      <label htmlFor="phone"><b>phone</b></label><br />
      <input type="text" placeholder="Enter phone" name="phone" onChange={handlePhone} required />
      <br /><br />
      <label htmlFor="job"><b>job</b></label><br />
      <input type="text" placeholder="Enter job" name="job" onChange={handleJob} />
      <br /><br />


      <label>
        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
      <br />
      <div className="clearfix">
        <button type="button" className="cancelbtn" onClick={handleCancel} >Cancel</button>
        <br />
        <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button><br />
      </div>
    </div>

  </>)
}


export default Join;