import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Slices/CategorySlice';
const Category = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state) => state.category.category)
    const getFoodCategories = () => {
        const foodCategories = FoodData.map(foodItem => foodItem.category);
        setCategories([...new Set(foodCategories)])
    }
    useEffect(() => {
        getFoodCategories()
    }, [])
    return (
        <div className='mx-2 md:mx-6'>
            <h3 className='font-semibold text-xl'>Find the best food</h3>
            <div className='my-4 flex gap-3 overflow-x-scroll md:overflow-x-hidden scroll-smooth'>
                <button onClick={() => dispatch(setCategory("All"))} className={`${selectedCategory === "All"? "bg-green-500 text-white":""} px-3 py-2 bg-gray-200 font-bold rounded-lg text-stone-800 text-bold hover:bg-green-500 hover:text-stone-100 transition-colors delay-100`}>All</button>
                {
                    categories.map((category, index) => {
                        return <button key={index} onClick={() => dispatch(setCategory(category))} className={`${category === selectedCategory? "bg-green-500 text-white":""} px-3 py-2 bg-gray-200 font-bold rounded-lg text-stone-800 text-bold hover:bg-green-500 hover:text-stone-100 transition-colors delay-100 `}>{category}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Category