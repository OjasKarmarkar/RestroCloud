import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function OrderButton() {

  const history = useNavigate()

  const orders = useSelector( state => state.order.value )
  const [money, setMoney] = useState(0)
  useEffect(() => {
    let totalCost = 0
    Object.entries(orders).forEach(( item ) => {
      totalCost += item[1].cost * item[1].count
    })
    setMoney(totalCost)
    console.log(money)
  }, [orders, money])
  

  return (
    <button 
      onClick={() => history("/billing")}
      className='fixed bottom-0 left-0 h-12 w-full flex justify-center items-center bg-orange-500'>
      <p className='text-2xl'>Proceed - ₹{money}</p>
    </button>
  )
}

export default OrderButton