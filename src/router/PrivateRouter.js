import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  const change=JSON.parse(sessionStorage.getItem("change"))
  return (
    change ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRouter