import React,{useEffect}  from 'react'
import './effects.css'
import useForm from '../../hooks/useForm';

export default function FormWithCustomHook() {

    const [formValues,handleInputChange]=useForm({
      name:'',
      email:'',
      password:'',
    });

  
    const {name,email,password} = formValues; 


    useEffect(()=>{
        console.log('Email Cambio')
    },[email])
 
   
  return (
    <div>
     <h1 >FormWithCustomHook</h1>
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
     <div className='form-group'>
     <label className=''>Password</label>

      <input type="text" name="password" className='form-control'
      placeholder='******' autoComplete='off'
      value={password}
      onChange={handleInputChange}/>

      
     </div>
    
    </div>
  )
}
