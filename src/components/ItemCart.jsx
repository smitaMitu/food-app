import React from 'react'
import {AiOutlinePlus, AiOutlineMinus, AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import {removeCartItem, qtyDecrement,qtyIncrement} from '../Slices/CartSlice';
import toast from 'react-hot-toast';
const ItemCart = ({item}) => {
  const {id, name, price, qty, img} = item;
  const dispatch = useDispatch()
  return (
    <div className='flex gap-1 items-center p-2 shadow-md rounded-md relative' key={id}>
        <img src={img} alt='' className='w-[50px] h-[50px]'/>
        <div className='w-full relative leading-5'>
            <h2 className='font-semibold text-sm text-gray-600'>{name}</h2>
            <div className='flex justify-between'>
                <span className='font-semibold text-sm text-green-500'>₹{price}</span>
            <div className='flex justify-between items-center gap-1'>
                <AiOutlineMinus onClick={() => qty > 1 ?  dispatch(qtyDecrement({id})) : {qty : 0}} className='border-1 cursor-pointer text-gray-600 border-gray-600 outline-0
                hover:text-white hover:bg-green-500 rounded-sm transition-all ease-linear'/>
                <span>{qty}</span>
                
                <AiOutlinePlus onClick={() => qty >= 1 ?  dispatch(qtyIncrement({id})) : {qty : 0}} className='border-1 cursor-pointer text-gray-600 border-gray-600 outline-0
                hover:text-white hover:bg-green-500 rounded-sm transition-all ease-linear'/>
            </div>
            </div>
            <AiFillDelete 
            onClick={() => {
              dispatch(removeCartItem({id}))
              toast(`${name} Removed!`,{icon:'👋'})
            }
            } 
            className='absolute right-0 top-0 cursor-pointer'/>
        </div>
    </div>
  )
}

export default ItemCart