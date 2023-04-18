import React,{useEffect}  from 'react'
import './effects.css'
export default function SimpleForm() {

    const [formState,setFormState]=useState(initialState)
    useEffect(()=>{
        console.log("hey!");
    });
  return (
    <div>
     <h1 >UseEffect</h1>
     <hr/>

    </div>
  )
}
