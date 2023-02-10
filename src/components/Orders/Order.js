import React from "react";
import AddedButton from "../Menu/AddedButton";
import { useSelector } from "react-redux";

function Order({ info}) {

  const orders = useSelector( state => state.order.value )

  return(
    <div className='h-[30rem] w-[95%] bg-white dark:bg-slate-800 dark:text-white rounded-md flex flex-col space-y-5'>
    
      <div className='w-full h-1/2 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center'>
        <img src=	{info.img} 
             alt="dish"
             className='w-full h-full object-cover rounded-t-md'
        />
      </div>

      <div className='w-full px-6 flex justify-between text-3xl'>
        <p>{info.name}</p>
        <p>₹100</p>
      </div>

      <div className='w-full h-1/6 px-6 flex justify-start text-sm overflow-y-auto'>
        <p className='line-clamp-300 leading-[1.25]'>Ingredients : {info.ingredients}</p>

      </div>

      
        <div
            className='bg-black h-[3.25rem] m-10 rounded-full bottom-1 text-white text-xl'>
            <AddedButton item={orders[info.name]} />
        </div>
      

    </div>
  )


}

export default Order;