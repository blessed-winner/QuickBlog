import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableData from '../../components/admin/BlogTableData'

const ListBlog = () => {
  const [blogs,setBlogs] = useState([])
  const fetchBlogs = () => {
    setBlogs(blog_data)
  }
  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div className='flex-1 bg-blue-50/50 px-5 pt-5 sm:pl-16 sm:p-12'>
         <h1>All Blogs</h1>
           <div className='relative h-4/5 mt-4 bg-white max-w-4xl scrollbar-hide rounded-lg overflow-x-auto shadow'>
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
                      {blogs.map((blog,index)=>(
                         <BlogTableData key={blog._id} blog={blog}/>
                      ))}
                  </tbody>
                </table>
           </div>
    </div>
  )
}

export default ListBlog