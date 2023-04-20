import React, { useReducer } from 'react'
import './style.css';
import { todoReducer } from './todoReducer';

export default function TodoApp() {

    const initialState =[
        {
            id: new Date().getTime(),
            descripcion:'Aprender React',
            done:false
        }
    ]
    const [state] = useReducer(todoReducer,initialState)
  return (
    <div>
        <h1>TodoApp</h1>
        <hr></hr>
        <ul>
            <li>Hola</li>
            <li>Mundo</li>
            <li>Hola de nuevo</li>

        </ul>
    </div>
  )
}
