import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-primary/3 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='text-gray-500 flex flex-col md:flex-row items-start border-b border-gray-300 py-10 justify-between gap-10'>
        <div>
          <img src={assets.logo} className='w-32 sm:w-44'/>
            <p className="max-w-[410px] mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, deserunt culpa! Quibusdam, maiores. Distinctio nemo molestiae eos veritatis</p>
        </div>
        <div className='flex flex-wrap w-full md:w-[45%] justify-between'>
          {footer_data.map((section,index)=>(
            <div key={index}>
              <h3 className='font-semibold md:mb-5 mb-2 text-gray-900 text-base'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((item,i)=>(
                    <li key={i}><a href="#" className='hover:underline transition'>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      <div className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        <p>&copy; Copyright 2025 QuickBlog - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer