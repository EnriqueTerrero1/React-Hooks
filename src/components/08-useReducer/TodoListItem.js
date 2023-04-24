import React from 'react'

export default function TodoListItem({todo,index,handleDelete,handleToggle}) {



    return (
        <div>
            <li className='list-group-item'
                            key={todo.id}>
                            <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)} >{index + 1}. {todo.descripcion}</p>
                            <button onClick={() => handleDelete(todo.id)} className='btn btn-danger'>Borrar</button>
                        </li>
      
        </div>
    )
}
