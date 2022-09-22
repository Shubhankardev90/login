import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Link, useLocation ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

const Table = () => {
    const location = useLocation()
    const navigate=useNavigate()
const [data,setData]=useState([])

const userLogin=useSelector(state=> state.userLogin)
const {loading,error,userInfo}=userLogin
const redirect = location.search ? location.search.split('=')[1] : '/login'
useEffect(() => {
if(userInfo){
   let token=userInfo.token
   console.log(token);
   const config = {
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
}
   axios.get('https://reqres.in/api/unknown',config).then(function(res){
    console.log(res.data.data);
    setData(res.data.data)
   })
}else{
    navigate(redirect)
}
}, [userInfo])


  return (
   <>
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Year</th>
        <th>Color</th>
        <th>Pantone Value</th>
      </tr>
      {
        data.length > 0 ? (
          data.map((item,key)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.pantone_value}</td>
            </tr>
          ))
        ):(
          <Spinner animation="border" variant="information" />
        )
      }
    </thead>
  </table>
   </>
  )
}

export default Table