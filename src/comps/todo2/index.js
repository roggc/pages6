import React from 'react'
import {Div} from './styled'

export default
({state,setState})=>
{
  const addTodo=
  e=>
  {
    const todos=state.todo2.todos.filter(todo=>true)
    todos.push({text:'haz esto'})
    setState
    (
      {
        ...state,
        todo2:
        {
          ...state.todo2,
          todos
        }
      }
    )
  }
  const el=
  <Div>
    <button onClick={addTodo}>add</button>
    <ul>
    {
      state.todo2.todos.map
      (
        (todo,i)=>
        <li key={i}>{todo.text}</li>
      )
    }
    </ul>
  </Div>
  return el
}
