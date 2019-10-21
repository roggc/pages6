import React from 'react'
import {Div} from './styled'

export default
({dispatch})=>
{
  const incrementCounter=
  ()=>
  dispatch({type:'INCREMENT'})
  const decrementCounter=
  ()=>
  dispatch({type:'DECREMENT'})
  const el=
  <Div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </Div>
  return el
}
