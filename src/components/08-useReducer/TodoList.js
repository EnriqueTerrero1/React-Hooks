import React from 'react'

import TodoListItem from './TodoListItem';


export default function TodoList({todos,handleDelete,handdleToggle}) {
  

    return (
        <div>
            <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, index) => (
                        //todosListItems
                        <TodoListItem
                        key={index}
                        todo={todo}
                        index={index}
                        handleDelete={handleDelete}
                        handleToggle={handdleToggle}
                        ></TodoListItem>
                    ))
                }

            </ul>
        </div>
    )
}
