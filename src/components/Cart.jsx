import React, { useState } from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const [active, setActive] = useState(false)
    const cartItems =useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQty,item) => totalQty+item.qty,0)
    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice+ item.qty * item.price,0)
    const navigate = useNavigate()
    return (
        <>
        <div className={`fixed top-0 right-0 w-full lg:w-[25vw] h-full p-5 bg-white z-10  ${active ? "translate-x-0": "translate-x-full"} transition-all duration-200`}>
            <div className='flex justify-between'>
                <span className='text-gray-700 font-bold text-lg'>My Order</span>
                <RiCloseCircleLine onClick={() => setActive(!active)} className='cursor-pointer text-lg'/>
            </div>
            <div className='h-100 overflow-auto'>
            {
              cartItems.length > 0 ?  cartItems.map((foodItem) => {
                    return <ItemCart key={foodItem.key} item={foodItem}/>
                }) : <h3>Your cart is empty</h3>
            }
            </div>
            
            <div className='absolute bottom-0 mb-5'>
                <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
                <h3 className='font-semibold text-gray-800'>Total Amount: {totalPrice}</h3>
                <hr className='my-2'/>
                <button onClick={() => navigate("/success")} className='py-2 bg-green-600 text-white w-[90vw] lg:w-[18vw] outline-0 border-0 rounded-lg'>checkout</button>
            </div>
        </div>
        <FaShoppingCart
        onClick={() => setActive(!active)}
         className={`fixed bottom-4 text-5xl right-4 p-3 bg-white rounded-full fill-gray-900 shadow-md cursor-pointer ${totalQty > 0 ? "animate-bounce delay-150 transition-all": ""}`}/>
        </>
    )
}

export default Cart