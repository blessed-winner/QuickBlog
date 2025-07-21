import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
  }
  return (
    <>
     <div className='flex justify-between px-4 sm:px-12 py-2 items-center h-[70px] border-b border-gray-200'>
        <img src={assets.logo} className='w-32 sm:w-40 cursor-pointer'/>
        <button onClick={logout} className='bg-primary px-8 py-2 text-white rounded-full cursor-pointer text-sm'>Logout</button>
     </div>
     <div className='flex h-[calc(100vh - 70px)]'>
        <Sidebar/>
        <Outlet/>
     </div>
    </>
  )
}

export default Layout