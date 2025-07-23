import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'

const AddBlog = () => {
  const [image,setImage] = useState(false)
  const[title,setTitle] = useState('')
  const[subTitle,setSubTitle] = useState('')
  const[category,setCategory] = useState('')
  const[isPublished,setIsPublished] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const onSubmitHandler = (e)=>{
    e.preventDefault()
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
            <button className='bg-black/70 text-white py-1.5 cursor-pointer text-xs rounded px-4 hover:underline ml-2 absolute bottom-1 right-2'>Generate with AI</button>
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
          <input type="checkbox" className='scale-125 cursor-pointer' onChange = {(e)=>setIsPublished(e.target.value)}/>
        </div>
        <button className='mt-8 w-40 h-10 cursor-pointer bg-primary text-white rounded text-sm'>
          Add Blog
        </button>

      </div>
</form>
  )
}

export default AddBlog