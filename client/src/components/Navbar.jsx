import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const { navigate,token } = useAppContext()
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="" className='w-32 sm:w-44 cursor-pointer'/>
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 bg-primary rounded-full px-10 py-2.5 text-white text-sm cursor-pointer'>
            {token ? 'Dashboard' : 'Login'}
            <img src={assets.arrow} className="w-3"/>
        </button>
    </div>
  )
}

export default Navbar