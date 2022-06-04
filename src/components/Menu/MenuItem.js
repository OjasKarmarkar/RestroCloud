import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from '../../features/orderSlice'
import AddedButton from './AddedButton'

function MenuItem({itemInfo}) {

  const orders = useSelector(state => state.order.value)
  const dispatch = useDispatch()

  return (
    <div className='h-[30rem] w-[95%] bg-white dark:bg-slate-800 dark:text-white mt-4 rounded-md flex flex-col space-y-5'>
    
      <div className='w-full h-1/2 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center'>
        <img src=	{itemInfo.img} 
             alt="dish"
             className='w-full h-full object-cover rounded-t-md'
        />
      </div>

      <div className='w-full max-h-8 text-clip px-6 flex justify-between text-2xl overflow-hidden'>
        <p>{itemInfo.name}</p>
        <p>₹100</p>
      </div>

      <div className='w-full max-h-4 px-6 flex justify-start text-xs text-gray-400 overflow-hidden' >
        <p className='line-clamp-300 leading-[1.25]'>Ingredients : {itemInfo.ingredients}</p>
      
      </div>
      <div>
   
      </div>

      {itemInfo.name in orders?
        <div
            className='bg-black h-[3.25rem] m-10 rounded-full bottom-1 text-white text-xl'>
            <AddedButton item={orders[itemInfo.name]} />
        </div>
      :
        <button 
            onClick={() => {dispatch(addOrder([itemInfo.name, itemInfo])); console.log(orders)}}
            className='bg-black h-[3.25rem] m-10 rounded-full bottom-1 text-white text-xl'>
            Add +
        </button>
      }

      {/* <div className='h-full w-full ml-10 rounded-lg space-y-3'>
        <p className='text-3xl font-bold'>{itemInfo.name}</p>
        <div className='text-gray-700 dark:text-slate-300'>
          <p className='pr-2'>Ingredients: </p>
          {itemInfo.ingredients.map((item,index)=>{
            return item
          })}
        </div>
        <p className='text-2xl font-semibold'>₹100</p>
      </div> */}
    </div>
  )
}

export default MenuItem