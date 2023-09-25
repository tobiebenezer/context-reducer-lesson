import React, { memo, useContext } from 'react'
import TodoContext from '../../store/context/TodoContext';

function Todos() {

  const {todos} = useContext(TodoContext)
  
  return (
    <>
      todos
      <ul class="list-group">
       {todos.map(({title, id,completed},i)=>(
            <li key={id} class="list-group-item">{title} <input type="checkbox" checked={completed} name="" id="" /> </li>
        )) }
      </ul>
    </>
  );
}

export default memo(Todos)