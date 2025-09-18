import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Slices/CartSlice'
const FoodCard = ({food,handleToast}) => {
    const {
        id,
    img,
    name,
    price,
    desc,
    category,
    rating
    } = food
    const dispatch = useDispatch()

  return (
    <div key={id} className='font-bold flex flex-col gap-3 bg-white rounded-lg p-5 w-[250px]'>
        <img className='w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out cursor-grab' src={img} alt='' />
        <div className='text-sm flex justify-between items-center'>
            <h2>{name}</h2>
            <p className='text-green-500'>₹{price}</p>
        </div>
        <p className='font-normal text-sm '>{desc.slice(0, 80)}...</p>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'><FaStar className='fill-yellow-400 mr-1'/>{rating}</div>
            <button
            onClick={() => {
              dispatch(addToCart({id,name,price,rating, qty: 1,img}))
              handleToast(name)
            }
            }
             className='text-sm bg-green-500 text-white hover:bg-green-600 px-3 py-1 rounded-lg'>Add to cart</button>
        </div>

    </div>
  )
}

export default FoodCard