import React from 'react'

export default function todos( {todo, toggleTodo}) {
  function handleToggle() {
    toggleTodo(todo.key)
  }
  return (
    <div>
      <input type="checkbox" checked={todo.complete} onChange={handleToggle}/>
      {todo.task}
    </div>
  )
}
