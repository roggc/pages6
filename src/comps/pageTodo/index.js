import React from 'react'
import {Div} from './styled'
import Todo from '../todo/index'

export default
({state1,state2,dispatch1,dispatch2})=>
{
  const el=
  <Div>
    <Todo state={state1} dispatch={dispatch1}/>
    <Todo state={state2} dispatch={dispatch2}/>
  </Div>
  return el
}
