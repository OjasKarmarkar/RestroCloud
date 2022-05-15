import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function Order({ info, count }) {

  console.log(info, count)

  return (
    <div className="h-48 w-full bg-white dark:bg-slate-800 my-1 rounded-md flex items-center p-3 relative">
      {/* Order image */}
      <div className="h-full aspect-square bg-sky-400 rounded-lg flex items-center justify-center">
        <img 
          className='h-auto w-auto'
          src={info.img} 
          alt="order"
        />
      </div>

      {/* description box */}
      <div className="h-full w-full mx-7 rounded-lg space-y-3 text-black dark:text-white">
        <p className="text-3xl font-bold">{info.name}</p>
        <p className="text-gray-700 dark:text-slate-300">Description</p>
        <p className="text-2xl font-semibold">₹69</p>
      </div>

      {/* no. of orders button */}
      <div className="h-full aspect-9-16 flex flex-col justify-center bg-sky-400 rounded-lg">
        <button className="w-full flex justify-center h-full rounded-t-md">
          <BiUpArrow size={30} />
        </button>

        <div className="w-full flex justify-center items-center aspect-square text-[2em]">
          <p>{count}</p>
        </div>

        <button className="w-full flex justify-center h-full rounded-b-md">
          <BiDownArrow size={30} />
        </button>
      </div>
    </div>
  );
}

export default Order;
