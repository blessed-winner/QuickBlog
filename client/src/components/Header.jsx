import { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const {input,setInput} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setInput(inputRef.current.value)
  } 

  const onClear = () => {
    setInput('')
    inputRef.current.value = " "
  }

  return (
    <div className='relative mx-8 sm:mx-16 md:mx-24'>
        <div className='text-center mt-20 mb-8'>
            <div className='inline-flex items-center justify-between gap-4 mb-4 px-6 py-1.6 bg-primary/10 rounded-full border border-primary/40 text-sm text-primary h-7'>
               <p>New: AI Feature Integrated</p>
               <img src={assets.star_icon} className='w-2.5'/>
            </div>
            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your Own Blogging <br/>Platform.</h1>
            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your space to think out loud, to share what matters and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>
            <form onSubmit = {onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 m-auto bg-white border border-gray-300 rounded'>
                <input ref={inputRef} type="text" placeholder="Search for blogs" className='w-full pl-4 outline-none'/>
                <button type="submit" className='px-8 py-2 m-1.5 bg-primary rounded text-white hover:scale-105 cursor-pointer transition-all '>Search</button>
            </form>
            </div>
            <div className='text-center'>
              {
                 input ? <button onClick = {onClear} className='text-light rounded-sm text-xs px-3 py-1 border shadow-sm cursor-pointer'>Clear Search</button> : ''
              }
              </div>
        
        <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header