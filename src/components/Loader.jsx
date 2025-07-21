import React from 'react'

const Loader = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='animate-spin border-4 border-gray-700 rounded-full  border-t-0 w-16 h-16'></div>
    </div>
  )
}

export default Loader