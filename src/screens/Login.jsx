import React, { useState,useEffect } from "react";
import { Form, Button,Spinner } from "react-bootstrap";
import { Link, useLocation ,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions/userActions'


const Login = () => {
  const location = useLocation()
  const navigate=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [agree,setAgree]=useState(true)

const dispatch =useDispatch()
const userLogin=useSelector(state=> state.userLogin)
const {loading,error,userInfo}=userLogin
const redirect = location.search ? location.search.split('=')[1] : '/table'

useEffect(() => {
  if (userInfo) {
  alert('User Login Success !! Redirecting to Table')
   navigate(redirect)
  }
}, [navigate, userInfo, redirect])

const loginHandler=(e)=>{
    e.preventDefault()
    if(!email || !password){
      alert('Enter Credentials')
    }else{
      dispatch(login(email, password))
    }
}

  return (
  <div className="formContainer">
      <Form onSubmit={loginHandler}>
        {error && (<h3>Invalid Credentials</h3>)}
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" value={agree} onChange={(e)=>setAgree(e.target.value)} />
      </Form.Group>
      <Button type="submit"  className="subBtn">
      {loading ? (<Spinner animation="border"/>):"Next"}
      </Button>
    </Form>
  </div>
  );
};

export default Login;
