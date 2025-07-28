import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import {parse} from 'marked'

const AddBlog = () => {
  const{axios} = useAppContext()
  const [isAdding,setIsAdding] = useState(false)
  const [loading,setLoading] = useState(false)
  const [image,setImage] = useState(false)
  const[title,setTitle] = useState('')
  const[subTitle,setSubTitle] = useState('')
  const[category,setCategory] = useState('')
  const[isPublished,setIsPublished] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const generateContent = async()=>{
    setLoading(true)
    if(!title) return toast.error('Please enter a title')
    try{
      const {data} = await axios.post('/api/blog/generate',{prompt:title})
      if(data.success){
        quillRef.current.root.innerHTML = parse(data.content) 
      } else{
        toast.error(data.message)
      }
    }
    catch(err){
      toast.error(err.message)
    } finally{
      setLoading(false)
    }
  }

  const onSubmitHandler = async(e)=>{
    try {
        e.preventDefault()
        setIsAdding(true)

        const blog = {
          title, subTitle, 
          description:quillRef.current.root.innerHTML,
          category, isPublished
        }

        const formData = new FormData()
        formData.append('blog',JSON.stringify(blog))
        formData.append('image',image)

        const {data} = await axios.post('/api/blog/add',formData)
        if(data.success){
        setTitle('')
        setSubTitle('')
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
        setIsPublished(false)

        toast.success('Blog added successfully')
        }
        else{
          toast.error(data.message)
        }
      
    } catch (error) {
       toast.error(error.message)
    } 
    finally{
      setIsAdding(false)
    }
  
  }

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
       quillRef.current = new Quill(editorRef.current,{theme:'snow'})
    }
  },[])
  return (
    <form onSubmit={onSubmitHandler} className='flex-1 text-gray-600 bg-blue-50/50 h-full overflow-scroll'>
        <div className='bg-white max-w-3xl w-full p-4 md:p-10 sm:m-10 shadow rounded'>
          <p>Upload thumbnail</p>
          <label htmlFor="image">
             <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='h-16 mt-2 rounded cursor-pointer' />
             <input onChange = {(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
          </label>

          <p className='mt-4'>Blog Title</p>
          <input type="text" placeholder='Type here' className='border border-gray-300 max-w-lg w-full outline-none rounded p-2 mt-2'  onChange = {(e)=>setTitle(e.target.value)} />

           <p className='mt-4'>Sub Title</p>
          <input type="text" placeholder='Type here' className='border border-gray-300 max-w-lg w-full outline-none rounded p-2 mt-2'  onChange = {(e)=>setSubTitle(e.target.value)}/>

          <p className='mt-4'>Blog description</p>
          <div className='relative h-76 pb-16 md:pb-10 pt-2 relative max-w-lg'>
            <div ref={editorRef}></div>
            {loading && <div className='absolute right-0 top-0 bottom-0 left-0 flex items-center justify-center bg-black/10 mt-2'>
            <div className='w-8 h-8 rounded-full border-2 border-t-white animate-spin'>
            </div>
            </div>}
            <button disabled={loading} className='bg-black/70 text-white py-1.5 cursor-pointer text-xs rounded px-4 hover:underline ml-2 absolute bottom-1 right-2' onClick={generateContent}>Generate with AI</button>
          </div>

           <p className='mt-4'>Blog category</p>
        <select name="category" className='border border-gray-300 px-3 py-2 rounded mt-2 outline-none' onChange = {(e)=>setCategory(e.target.value)}>
          <option value="">Select category</option>
          {blogCategories.map((item,index)=>(
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        <div className='flex gap-2 mt-4'>
          <p>Publish Now</p>
          <input type="checkbox" className='scale-125 cursor-pointer' onChange = {(e)=>setIsPublished(e.target.checked)}/>
        </div>
        <button disabled={isAdding} className='mt-8 w-40 h-10 cursor-pointer bg-primary text-white rounded text-sm'>
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>

      </div>
</form>
  )
}

export default AddBlog