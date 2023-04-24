import React, { useEffect, useReducer } from 'react'
import './style.css';
import { todoReducer } from './todoReducer';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';


export default function TodoApp() {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handdleToggle = (todoId) => {
        dispatch(
            {
                type: 'toggle',
                payload: todoId
            }
        )
    }
    const handleAddTodo=(newTodo)=>{
        
        dispatch(newTodo)

    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
 
  
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>
            <div className='row'>
                <div className='col-7'>

                    {/* todoList,todos necesarios */}
               <TodoList
                
               todos={todos}
               handleDelete={handleDelete}
               handdleToggle={handdleToggle}></TodoList>
                </div>
                <div className="col-5">
                <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
                </div>
            </div>

        </div>
    )
    }
