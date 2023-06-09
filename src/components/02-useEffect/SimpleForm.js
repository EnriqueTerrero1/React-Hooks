import React,{useEffect,useState}  from 'react'
import './effects.css'
import Message from './Message';
export default function SimpleForm() {

    const [formState,setFormState]=useState({
      name:'',
      email:''
    });

  
    const {name,email} = formState; 

    useEffect(()=>{

    },[]);

    useEffect(()=>{
        // console.log("hey!");
    },[formState]);
    useEffect(()=>{
      // console.log("Se cambio el email!");
    },[email]);

    const handleInputChange=({target})=>{
   
      setFormState({
        ...formState,
        [target.name] :target.value,
        });

    }
  return (
    <div>
     <h1 >UseEffect</h1>
     <hr/>

     <div className='form-group'>
      <label className=''>Name</label>
      <input type="text" name="name" className='form-control'
      placeholder='Tu Nombre' autoComplete='off'
      value={name}
      onChange={handleInputChange}/>

      
     </div>

     <div className='form-group'>
     <label className=''>Email</label>

      <input type="text" name="email" className='form-control'
      placeholder='Tu email' autoComplete='off'
      value={email}
      onChange={handleInputChange}/>

      
     </div>
      {(name==='123') && <Message></Message>}
    </div>
  )
}
