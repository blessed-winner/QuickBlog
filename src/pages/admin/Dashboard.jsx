import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableData from '../../components/admin/BlogTableData'

const Dashboard = () => {
  const [dashboardData,setDashboardData] = useState({
    blogs:0,
    comments:0,
    drafts:0,
    recentBlogs:[]
  })
  const fetchDashboard = () => {
    setDashboardData(dashboard_data)
  }
  useEffect(()=>{
     fetchDashboard()
  },[])
  return (
    <div className='flex-1 bg-blue-50/50 p-4 md:p-10'>
        <div className='flex flex-wrap gap-4'>
           <div className='flex items-center bg-white min-w-58 p-4 gap-4 hover:scale-105 transition-all cursor-pointer rounded-md shadow'>
              <img src={assets.dashboard_icon_1} alt="" />
              <div>
                <p className='font-semibold text-xl text-gray-600'>{dashboardData.blogs}</p>
                <p className='text-gray-400 font-light'>Blogs</p>
              </div>
              </div>

              <div className='flex items-center bg-white min-w-58 p-4 gap-4 hover:scale-105 transition-all cursor-pointer rounded-md shadow'>
              <img src={assets.dashboard_icon_2} alt="" />
              <div>
                <p className='font-semibold text-xl text-gray-600'>{dashboardData.comments}</p>
                <p className='text-gray-400 font-light'>Comments</p>
              </div>
              </div>

              <div className='flex items-center bg-white min-w-58 p-4 gap-4 hover:scale-105 transition-all cursor-pointer rounded-md shadow'>
              <img src={assets.dashboard_icon_3} alt="" />
              <div>
                <p className='font-semibold text-xl text-gray-600'>{dashboardData.drafts}</p>
                <p className='text-gray-400 font-light'>Drafts</p>
              </div>
              </div>
        </div>
        <div>
           <div className='flex gap-3 items-center m-4 mt-6 text-gray-600'>
              <img src={assets.dashboard_icon_4} alt="" />
              <p>Latest Blogs</p>
           </div>
           <div className='bg-white max-w-4xl scrollbar-hide rounded-lg overflow-x-auto shadow'>
                <table className='w-full text-gray-500 text-sm'>
                  <thead className='text-gray-600 uppercase text-left text-xs'>
                    <tr>
                     <th scope='col' className='py-4 px-2 xl:px-6'>#</th>
                     <th scope='col' className='py-4 px-2'>Blog Title</th>
                     <th scope='col' className='py-4 px-2 max-sm:hidden'>Date</th>
                     <th scope='col' className='py-4 px-2 max-sm:hidden'>Status</th>
                     <th scope='col' className='py-4 px-2'>Actions</th>
                    </tr>
                    </thead>
                  <tbody>
                      {dashboardData.recentBlogs.map((blog,index)=>(
                         <BlogTableData key={blog._id} blog={blog}/>
                      ))}
                  </tbody>
                </table>
           </div>
        </div>
    </div>
  )
}

export default Dashboard