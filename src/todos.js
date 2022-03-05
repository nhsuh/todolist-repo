import React from 'react'

export default function todos( {todo, toggleTodo}) {
  function handleToggle() {
    toggleTodo(todo.key)
  }
  return (
    <div>
      <h4>Priority: {todo.priority}</h4>
      <input type="checkbox" checked={todo.complete} onChange={handleToggle}/>
      {todo.task}
    </div>
  )
}
