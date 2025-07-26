import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Blog = () => {
  const {id} = useParams()
  const {axios} = useAppContext()
  const [data,setData] = useState(null)
  const [comments,setComments] = useState([])
  const [name,setName] = useState('')
  const [content,setContent] = useState('')
  const fetchBlogData = async() => {
      try{
        const {data} = await axios.get(`/api/blog/${id}`)
        data.success ? setData(data.blog) : toast.error(data.message)
      }
      catch(err){
        toast.error(err.message)
      }
  }

  const fetchComments = async() => {
    try{
       const {data} = await axios.post('/api/blog/comments',{blogId:id})
       data.success ? setComments(data.comments) : toast.error(data.message)
    }
    catch(err){
       toast.error(err.message)
    }
    
  }
  const addComment = async(e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/blog/add-comment',{blog:id, name, content})
      if(data.success){
        toast.success(data.message)
        setName('')
        setContent('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
       toast.error(error.message)
    }
  }
  useEffect(()=>{
     fetchBlogData()
     fetchComments()
  },[])
  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
      <Navbar/>
      <div className='text-center text-gray-600 mt-20'>
        <p className='font-medium text-primary py-4'>Published on {Moment(data.createdAt).format('Do MMMM YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl max-w-2xl mx-auto font-semibold text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{__html:data.subTitle}}></h2>
        <p className='bg-primary/3 border border-primary/35 rounded-full inline-block py-1 px-4 text-sm text-primary font-medium mb-6'>Michael Brown</p>
      </div>
      <div className='max-w-5xl mx-5 md:mx-auto mt-6 my-10'>
        <img src={data.image} alt="" className='rounded-3xl mb-5' />
        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}}></div>
      </div>
      <div className='max-w-3xl mx-auto mt-14 mb-10'>
          <p className='font-semibold mb-4'>Comments({comments.length})</p>
           <div className='flex flex-col gap-4'>
            {comments.map((item,index)=>(
              <div key={index} className=' relative bg-primary/2 border border-primary/5  max-w-xl rounded text-gray-600 p-4'>
              <div className='flex gap-2 items-center mb-2'>
              <img src={assets.user_icon} className='w-6' />
              <p className='font-medium'>{item.name}</p>
            </div>
            <p className='text-sm max-w-md ml-8'>{item.content}</p>
            <div className='text-xs absolute right-4 bottom-3'>{Moment(comments.createdAt).fromNow()}</div>
              </div>
             
            ))}
           
           </div>
      </div>
      <div className='max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Add your comment</p>
          <form onSubmit={addComment} className='flex flex-col gap-4 max-w-lg items-start'>
            <input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Name' required className='border border-gray-300 p-2 rounded w-full outline-none'/>
            <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder='Comment' required className='border border-gray-300 p-2 w-full h-48 outline-none'></textarea>
            <button type='submit' className='bg-primary p-2 text-white hover:scale-102 transition-all px-8 cursor-pointer rounded'>Submit</button>
          </form>
      </div>
      <div>
        
        <div className='max-w-3xl mx-auto my-24'>
          <p className='font-semibold my-4'>Share this article on social media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} alt="" width={50} />
            <img src={assets.twitter_icon} alt="" width={50} />
            <img src={assets.googleplus_icon} alt="" width={50}/>
          </div>
          </div>
      </div>
    <Footer/>
    </div>
  ) : <Loader/>
}

export default Blog