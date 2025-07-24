import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get your latest blog, new tech, and exclusive news</p>
         <form className='flex items-center justify-center w-full max-w-2xl md:h-13 h-12'>
            <input type="email" placeholder="Enter your email id" className='w-full px-3 h-full border border-gray-300 border-r-0 outline-none rounded-md rounded-r-none text-gray-500'/>
             <button type='submit' className='h-full md:px-12 px-8 bg-primary/80 text-white rounded-md rounded-l-none hover:bg-primary transition-all cursor-pointer'>Subscribe</button>
         </form>
    </div>
  )
}

export default Newsletter