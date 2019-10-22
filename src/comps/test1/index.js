import React,{useEffect} from 'react'
import {Div} from './styled'

export default
({state,setState})=>
{
  useEffect
  (
    ()=>
    {
      setState
      (
        {
          ...state,
          test1:
          {
            ...state.test1,
            count:state.test1.count+1
          }
        }
      )
    },[]
  )
  const el=
  <Div>
  {state.test1.count}
  </Div>
  return el
}
