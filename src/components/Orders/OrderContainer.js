import React from 'react'
import Order from './Order'
import OrderButton from './OrderButton'
import EmptyOrders from './EmptyOrders'
import { useSelector } from 'react-redux'

function OrderContainer() {

  const orders = useSelector( state => state.order.value )
  console.log(Object.entries(orders))
  return (
    <div className='fullpage w-full px-5 pt-[3rem] shadow-lg bg-slate-200 dark:bg-black'>
        <div className="w-full mx-40 my-10 text-black text-3xl flex flex-col">
      <p className=" text-bold text-3xl">Order Summary</p>
      <p className="pt-4 text-gray-400 text-lg">Review and check your delicious food before placing !</p>
        <div className='mt-4 w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 border-solid border-2 border-gray-300 h-min bg-gray-200 rounded-lg'>
          {Object.entries(orders).map((item, index) => {
            console.log(item)
            return <Order info={item[1].info} count={item[1].count} key={index} />
          })}
        </div>
        {Object.entries(orders).length === 0 &&
          <EmptyOrders />
        }
        <OrderButton />
    </div>
    </div>
  )
}

export default OrderContainer