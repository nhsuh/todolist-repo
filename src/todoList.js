import React from 'react'
import Todo from './todos'

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map (task => {
          return <Todo key = {task.key} todo ={task} toggleTodo = {toggleTodo}/>
      })}
    </div>
  )
}
