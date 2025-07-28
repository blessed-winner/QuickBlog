import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableData from '../../components/admin/BlogTableData'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ListBlog = () => {
  const [blogs,setBlogs] = useState([])
  const{axios} = useAppContext()
  const fetchBlogs = async() => {
    try {
      const{data} = await axios.get('/api/admin/blogs')
      if(data.success){
        setBlogs(data.blogs)
      } else{
        toast.error(data.message)
      }
    } catch (err) {
        toast.error(err.message)
    }
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
                         <BlogTableData key={blog._id} blog={blog} index={index + 1} fetchBlogs={fetchBlogs}/>
                      ))}
                  </tbody>
                </table>
           </div>
    </div>
  )
}

export default ListBlog