import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Slices/SearchSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className='flex flex-col justify-start lg:flex-row lg:justify-between items-center py-3 mx-2 lg:mx-6 mb-10'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h3 className='text-2xl font-bold'>Food App</h3>
        </div>
        <div className='w-full lg:w-auto'>
            <input type='search' placeholder='search here...' autoComplete='off' name="search" 
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className='p-3 border border-gray-400 rounded-lg outline-0 w-full lg:w-[25vw] bg-stone-50'
             />
        </div>
    </nav>
  )
}

export default Navbar