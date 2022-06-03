import React from 'react'
import { useDispatch } from 'react-redux'
import { BiPlus , BiMinus} from 'react-icons/bi'
import { incrementOrder, decrementOrder } from '../../features/orderSlice'

function AddedorderButton({ item }) {
  
  const dispatch = useDispatch()
  console.log(item)
  return (
    <div className='flex items-center h-full py-1'>
        <button 
          onClick={() => dispatch(decrementOrder(item.info.name))}
          className='h-full w-2/5 flex items-center justify-center'>
            <p className='text-2xl'><BiMinus/></p>
        </button>
        <div className='w-3/5 text-center'>
            {item.count}
        </div>
        <button 
          onClick={() => dispatch(incrementOrder(item.info.name))}
          className='h-full w-2/5  flex items-center justify-center'>
            <p className='text-2xl'><BiPlus/></p>
        </button>

    </div>
  )
}

export default AddedorderButton