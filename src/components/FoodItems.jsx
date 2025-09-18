import React from 'react'
import FoodCard from './FoodCard'
import FoodData from "../Data/FoodData"
import toast, {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {
  const handleToast= (name) => toast.success(`Added ${name} to cart`)
  const category = useSelector(state => state.category.category)
  const search = useSelector(state=> state.search.search)
 const filteredItems = category=== "All" ? FoodData.filter(food => food.name.toLowerCase().includes(search.toLowerCase())) 
 : FoodData.filter(item => item.category === category && item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    <div className='flex gap-3 flex-wrap mx-2 md:mx-6 justify-center my-10'>
       
        {
          filteredItems.map(item => {
            return <FoodCard food={item} key={item.id} handleToast={handleToast} />
          })
        }
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
</>
  )
}

export default FoodItems