import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const BlogTableData = ({blog,index, fetchBlogs}) => {
      const{title,createdAt} = blog
      const blogDate = new Date(createdAt)

       const {axios} = useAppContext()
       const deleteBlog = async()=>{
           const confirm = window.confirm("Are you sure you want to delete this blog ?")
            if(!confirm) return;
         try {
         const{data} = await axios.post('/api/blog/delete',{id:blog._id})
         await fetchBlogs()
            if(data.success){
              toast.success(data.message)
            } else{
              toast.error(data.message)
            }
         } catch (err) {
            toast.error(err.message)
         }
       }

       const togglePublish = async()=>{
          try {
            const{data} = await axios.post('/api/blog/toggle-publish',{id:blog._id})
            if(data.success){
              toast.success(data.message)
              await fetchBlogs()
            } else{
              toast.error(data.message)
            }
         } catch (err) {
            toast.error(err.message)
         }
       }

  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{blogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${blog.isPublished ? 'text-green-600' : 'text-orange-700'}`}>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
      </td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button onClick={togglePublish} className='mt-1 px-2 py-0.5 border rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
        <img onClick={deleteBlog} src={assets.cross_icon} alt="" className='w-8 hover:scale-110 cursor-pointer transition-all' />
      </td>
    </tr>
  )
}

export default BlogTableData