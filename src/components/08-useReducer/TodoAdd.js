import React from 'react'
import useForm from '../../hooks/useForm'

export default function TodoAdd({handleAddTodo}) {
    
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (description.trim().length >= 1) {
            const newTodo = {
                id: new Date().getTime(),
                descripcion: description,
                done: false
            }

            const action = {
                type: 'add',
                payload: newTodo
            }
          
            handleAddTodo(action);
            reset();

    }
}
  return (
    <>
       <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={handleInputChange}
                    value={description}
                    name="description"
                    placeholder='aprender...'
                    autoComplete='off' className='form-control'></input>
                <button type="submit" className='btn btn-outline-primary mt-1 btn-block'>Agregar</button>
            </form>
    </>
  )
}
