import React from 'react'
import BillItem from './BillItem'
import { MdFastfood } from 'react-icons/md'
import { useSelector } from 'react-redux'

function Bill() {

    const bill = useSelector( state => state.bill.value )
    
    let totalCost = 0

    Object.entries(bill).forEach(( item ) => {
        totalCost += item[1].cost * item[1].count
    })


    //Date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

  return (
    <div className='mt-10 flex flex-col items-center h-min bg-white text-black dark:bg-slate-800 dark:text-white space-y-8 pb-5 px-2 rounded-2xl'>
        <div className='flex justify-between items-center w-full px-4 my-4'>
            <div className='flex items-end text-4xl'>
                <MdFastfood size={40}/>
                <p>RestroCloud</p>
            </div>
            {today}
        </div>
        
        {Object.entries(bill).map((item, index) => {
            return <BillItem name={item[0]} count={item[1].count} cost={item[1].cost} key={index} />
        })}

        <div className='w-[75vw] flex justify-between mx-5 my-2 '>
            <p className='font-bold text-3xl'>Total</p>
            <p className='font-bold text-4xl'>₹ {totalCost}</p>
        </div>
    </div>
  )
}

export default Bill