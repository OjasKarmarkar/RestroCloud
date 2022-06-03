import React from 'react'

const desert = "https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80"
const mc = "https://images.unsplash.com/photo-1593253787226-567eda4ad32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
const starter = "https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
const snack = "https://images.unsplash.com/photo-1612773843298-44dcdd45d865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

function MenuCategoryItem({ itemId }) {
  const handleClick = () => {
    var element = document.getElementById(itemId);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  return (
    <button
      onClick={handleClick}
      className='hover:scale-105 hover:-translate-y-0.5 transition flex flex-col text-center items-center'>



      <div className="">
        <img src={itemId === "dessert" ? (desert) : itemId === "main course"? (mc): itemId === "snack"? (snack) :(starter)} alt="..." className="h-72 shadow-lg rounded-full md:max-w-full md:h-auto align-middle border-none" />
      </div>
      <p className='pt-4 font-bold text-xl text-gray-700 capitalize'>{itemId}</p>
    </button>
  )
}

export default MenuCategoryItem