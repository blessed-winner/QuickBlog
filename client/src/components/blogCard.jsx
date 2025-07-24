import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({blog}) => {
    const { _id,title,description,category,image } = blog
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/blog/${_id}`)} className='rounded-lg overflow-hidden shadow hover:shadow-primary/20 duration-300 hover:scale-102 cursor-pointer w-full'>
        <img src={image} alt="" className='aspect-video' />
        <span className='bg-primary/40 rounded-full px-3 py-1 text-primary text-xs mt-4 ml-5 inline-block'>{category}</span>
        <div className='p-5'>
            <h5 className='mb-2 text-gray-900 font-medium'>{title}</h5>
            <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{'__html':description.slice(0,80)}}></p>
        </div>
    </div>
  )
}

export default BlogCard