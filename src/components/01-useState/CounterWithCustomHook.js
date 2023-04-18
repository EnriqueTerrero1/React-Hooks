 
import React from 'react'
import './counter.css'
import useCounter from '../../hooks/useCounter'

export default function CounterWithCustomHook() {

  const{state,increment,decrement,reset}=   useCounter(100);



  return (
    <div>
      <h1>Counter with hook:{state}</h1>
      <hr/>


      <button onClick={()=>increment(2)} className='btn btn-primary'>+1</button>
      <button onClick={()=>reset()} className='btn btn-danger'>RESET</button>
      <button onClick={()=>decrement(2)} className='btn btn-success'>-1</button>


    </div>
  )
}
