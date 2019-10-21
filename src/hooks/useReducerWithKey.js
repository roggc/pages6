import {useEffect,useReducer,useCallback} from 'react'

/*
  this hook is intended to save state in local storage and recover from it when needed. its use is
  the same as useReducer but only giving an aditional argument 'key'.
*/

export default
(reducer,initialState,key)=>
{
  const getState=
  useCallback
  (
    ()=>
    JSON.parse(localStorage.getItem(key))|| initialState
    ,[]
  )
  const [state,dispatch]=useReducer(reducer,getState())
  useEffect
  (
    ()=>
    {
      localStorage.setItem(key,JSON.stringify(state))
    }
    ,[state]
  )
  return {state,dispatch}
}
