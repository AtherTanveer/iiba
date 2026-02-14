import React from 'react'
import { Navigate, Outlet } from "react-router-dom"

const HrPrivateCo = () => {
  const auth2 = localStorage.getItem("hariyana")
  return (
    auth2?<Outlet/>:<Navigate to="/" />
  )
}

export default HrPrivateCo