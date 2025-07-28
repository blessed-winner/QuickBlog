import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentsTableData from '../../components/admin/CommentsTableData'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {
  const{axios} = useAppContext()
  const[comments,setComments] = useState([])
  const[filter,setFilter] = useState('Not Approved')
  const fetchComments = async() => {
     try {
      const{data} = await axios.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
     } catch (error) {
       toast.error(error.message)
     }
  }
  useEffect(()=>{
    fetchComments()
  },[])
  return (
    <div className='flex-1 bg-blue-50/50 px-5 pt-5 sm:pl-16 sm:p-12'>
        <div className='flex justify-between max-w-3xl items-center'>
          <h1>Comments</h1>
          <div className='flex gap-4'>
             <button onClick={()=>setFilter('Approved')} className={`shadow-custom-sm border px-4 py-1 text-xs rounded-full cursor-pointer ${filter === 'Approved ' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>
             <button onClick={()=>setFilter('Not Approved')} className={`shadow-custom-sm border px-4 py-1 text-xs rounded-full cursor-pointer ${filter === 'Not Approved ' ? 'text-primary' : 'text-gray-700'}`}>Not Approved</button>
          </div>
        </div>
        <div className='relative mt-4 h-4/5 bg-white max-w-4xl scrollbar-hide rounded-lg overflow-x-auto shadow'>
                <table className='w-full text-gray-500 text-sm'>
                  <thead className='text-gray-600 uppercase text-left text-xs'>
                    <tr>
                     <th scope='col' className='py-6 px-3'>Blog Title & Comment</th>
                     <th scope='col' className='py-6 px-3 max-sm:hidden'>Date</th>
                     <th scope='col' className='py-6 px-3'>Action</th>
                    </tr>
                    </thead>
                  <tbody>
                      {comments.filter((comment)=>{
                        if(filter === 'Approved') return comment.isApproved === true
                        return comment.isApproved === false
                      }).map((comment,index)=>(
                        <CommentsTableData key={comment._id} comment={comment} fetchComments={fetchComments}/>
                      ))}
                  </tbody>
                </table>
           </div>
    </div>
  )
}

export default Comments