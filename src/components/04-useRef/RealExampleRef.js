import React,{useState} from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import '../02-useEffect/effects.css'
export default function RealExampleRef() {

    const [show,setShow]=useState(false);
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr></hr>

        { show&& <MultipleCustomHooks></MultipleCustomHooks>}


        <button 
        className='btn btn-primary mt-5'
        onClick={()=>{setShow(!show)}}>
            Show/Hide
        </button>

    </div>
  )
}
