import React,{useRef} from 'react'
import '../02-useEffect/effects.css'

export default function FocusScreen() {

    const inputRef = useRef();
    console.log(inputRef );
    
    const handleClick=()=>{ inputRef.current.select(); }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input ref={inputRef} className=' mb-3 form-control' placeholder='Su Nombre'/>

      <button onClick={handleClick} className='btn btn-outline-primary '>Focus</button>
    </div>
  )
}
