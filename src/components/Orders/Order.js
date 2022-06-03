import React from "react";
import AddedButton from "../Menu/AddedButton";
import { useSelector } from "react-redux";
import AddedorderButton from "../Menu/AddedorderButton";

function Order({ info }) {

  const orders = useSelector(state => state.order.value)

  return (

    <div className="w-full h-40 flex flex-row">


     
        <img src={info.img}
          alt="dish"
          className='w-1/5 h-100'
        />

      <div className='w-full px-6 flex flex-col justify-between text-3xl py-6'>
        <div className="flex flex-row justify-between gap-x-10">
        <p>{info.name}</p>
        <p>₹69</p>

     
        </div>
        
        <div className='h-1/6 flex justify-start text-sm'>
        <p className=''>{info.ingredients}</p>

      </div>


      <div
        className='bg-black w-1/6 rounded-full bottom-1 text-white text-xl'>
        <AddedorderButton item={orders[info.name]} />
      </div>

      </div>

      

    </div>


  )


}

export default Order;
