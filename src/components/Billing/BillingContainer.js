import React from 'react'
import Bill from './Bill'
import ConfirmBill from './ConfirmBill'

function BillingContainer() {
  return (
    <div className='fullpage w-full  px-5 pt-[3rem] shadow-lg bg-slate-200 dark:bg-black flex flex-col items-center'>
        <Bill />
        <ConfirmBill />
    </div>
  )
}

export default BillingContainer