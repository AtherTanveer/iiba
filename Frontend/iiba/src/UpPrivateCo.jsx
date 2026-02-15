import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
const UpPrivateCo = () => {
  const auth = localStorage.getItem("uttarparadesh_87")
  return(
auth?<Outlet/>:<Navigate to="/uttrakhandLogin" />
  ) 
}

export default UpPrivateCo