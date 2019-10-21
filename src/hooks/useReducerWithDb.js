import {useEffect,useReducer,useCallback} from 'react'
import {apiUrl,fetchOptions} from '../graphql/index'

/*
  this hook pretends to store state data into db and recover it.
*/

const queryGetState=
`
query($email:String!,$key:String!)
{
  getState(email:$email,key:$key)
  {
    res
  }
}
`

const querySetState=
`
mutation($email:String!,$key:String!,$state:String)
{
  setState(email:$email,key:$key,state:$state)
}
`

export default
(reducer,initialState,key1,key2)=>
{
  // const defaultValue=JSON.parse(localStorage.getItem(key2))||initialState
  // const email=defaultValue.login.user?defaultValue.login.user.email:''

  const email=localStorage.getItem('email')
  // let initialStateDb
  // await (
  //   useCallback
  //   (
  //     async()=>
  //     {
  //       if(email)
  //       {
  //
  //         const resp=await fetch(apiUrl,fetchOptions(queryGetState)({email,key:key1}))
  //         const json=await resp.json()
  //         initialStateDb=JSON.parse(json.data.getState?json.data.getState.res:null)
  //         console.log(initialStateDb,email)
  //       }
  //     }
  //     ,[email]
  //   )
  // )()
  fetch(apiUrl,fetchOptions(queryGetState)({email,key:key1}))
  .then(resp=>resp.json())
  .then(json=>)
  const [state,dispatch]=useReducer(reducer,initialState)
console.log(state)
  // const setState=
  // useCallback
  // (
  //   async()=>
  //   {
  //     if(key1===key2)
  //     {
  //       localStorage.setItem('email',state.login.user?state.login.user.email:'')
  //       //localStorage.setItem(key1,JSON.stringify(state))
  //     }
  //     const resp=await fetch(apiUrl,fetchOptions(querySetState)({email,key:key1,state:JSON.stringify(state)}))
  //   }
  //   ,[state]
  // )
  //
  // useEffect
  // (
  //   ()=>
  //   {
  //     setState()
  //   }
  //   ,[setState]
  // )
  return {state,dispatch}
}
