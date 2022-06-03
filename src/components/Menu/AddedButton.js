import React from 'react'
import { useDispatch } from 'react-redux'
import { BiPlus , BiMinus} from 'react-icons/bi'
import { incrementOrder, decrementOrder } from '../../features/orderSlice'

function AddedButton({ item }) {
  
  const dispatch = useDispatch()
  console.log(item)
  return (
    <div className='flex items-center h-full'>
        <button 
          onClick={() => dispatch(decrementOrder(item.info.name))}
          className='h-full w-2/5 bg-white rounded-l-full text-black flex items-center justify-center'>
            <p className='text-5xl'><BiMinus/></p>
        </button>
        <div className='w-3/5 text-center'>
            {item.count}
        </div>
        <button 
          onClick={() => dispatch(incrementOrder(item.info.name))}
          className='h-full w-2/5 bg-white rounded-r-full text-black flex items-center justify-center'>
            <p className='text-5xl'><BiPlus/></p>
        </button>

    </div>
  )
}

export default AddedButton