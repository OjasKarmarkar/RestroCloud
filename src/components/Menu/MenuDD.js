import React from 'react'
import MenuItem from './MenuItem'



function MenuDD({ddId, ddItems}) {
const mc = "https://img.freepik.com/free-vector/vector-illustration-idli-south-indian-main-breakfast-item-which-is-arranged-plate_527904-1473.jpg?w=900"
const starter = "https://img.freepik.com/free-vector/traditional-italian-sandwich_178650-6199.jpg?w=740"
const snack = "https://img.freepik.com/free-vector/fast-food-round-composition-illustration_1284-35627.jpg?t=st=1654284175~exp=1654284775~hmac=7611af31e1945d8514827f8b9af66c0612a6103dcbc4ee9a37b220ed6527a47c&w=740"
  const dessert = "https://img.freepik.com/free-vector/realistic-sweet-treats-composition_1284-25449.jpg?t=st=1654283466~exp=1654284066~hmac=bdddd33570a98309ad4a17161fd02f5f3369ae4cb7c25fd87a031db64bd3a7e1&w=826"
  return (
    <div id={ddId} className='md:px-10 flex flex-col'>
      <div className='md:px-4 py-10 flex flex-row  text-center items-center font-bold text-xl'>
      <img src={ddId === "dessert" ? (dessert) : ddId === "main course"? (mc): ddId === "snack"? (snack) :(starter)} alt="..." className="h-20 w-20 shadow-lg rounded-full  align-middle border-none" />
        <p className='px-6 overline'>Explore Our {ddId}</p>
      </div>
    {/* <div className='w-screen bg-sky-400 h-10 text-white flex justify-center items-center px-5'>
      {ddId}
    </div> */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4'>
      {ddItems.map((item,index)=>{
        return <MenuItem itemId={1} itemInfo={item} key={index}/>
      })}
    </div>
    </div>
  )
}

export default MenuDD