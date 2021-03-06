import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToBill } from '../../features/billSlice'
import { removeOrder } from '../../features/orderSlice'

function OrderButton() {

  const history = useNavigate()
  const dispatch = useDispatch()
  const orders = useSelector( state => state.order.value )
  const bill = useSelector( state => state.bill.value )
  const [orderAmount, setOrderAmount] = useState(0)
  const [billAmount, setBillAmount] = useState(0)
  useEffect(() => {
    let totalCost = 0
    Object.entries(orders).forEach(( item ) => {
      totalCost += item[1].cost * item[1].count
    })
    setOrderAmount(totalCost)
    console.log(orderAmount)
  }, [orders, orderAmount])

  useEffect(() => {
    let totalCost = 0
    Object.entries(bill).forEach(( item ) => {
      totalCost += item[1].cost * item[1].count
    })
    setBillAmount(totalCost)
    console.log(billAmount)
  }, [bill, billAmount])
  
  const pushBill = () => {
    if (orderAmount !== 0) {
      dispatch(addToBill(Object.entries(orders)))
      dispatch(removeOrder())
    }
  }

  return (
    <div className='fixed bottom-0 left-0 h-12 w-full flex justify-center items-center'>
      <button
        onClick={() => pushBill()}
        className='w-1/4 mx-12 bg-black h-[3.25rem] m-10 rounded-lg bottom-1 text-white text-xl border-2'>
        <p className='text-2xl'>Order - ₹{orderAmount}</p>
      </button>
      <button 
        onClick={() => history("/billing")}
        className='w-1/4  bg-black h-[3.25rem] m-10 rounded-lg bottom-1 text-white text-xl border-2'>
        <p className='text-2xl'>Proceed - ₹{billAmount}</p>
      </button>
    </div>
  )
}

export default OrderButton