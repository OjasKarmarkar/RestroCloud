import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeOrder } from '../../features/orderSlice'
import { resetBill } from '../../features/billSlice'
import { useNavigate } from 'react-router-dom'

function ConfirmBill() {
    const history = useNavigate()
    const dispatch = useDispatch()
    const confirmPayment = () => {
        axios.put('https://whispering-taiga-13938.herokuapp.com/api/reset/628210ec1035265f44981a60')
        .then(
            res => {
                dispatch(removeOrder())
                dispatch(resetBill())
                history("/home")
                console.log(res)
            }
        ).catch(()=>
            console.log("backend might be down")
        )
    }

  return (
    <button 
        onClick={() => confirmPayment()}
        className='bg-black text-white p-3 rounded-md mt-10'>
        Confirm Payment
    </button>
  )
}

export default ConfirmBill