import {useEffect,useState,useCallback} from 'react'
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
(initialState,key,isOne,state1=null)=>
{
  const [state,setState]=useState(initialState)
  const email=localStorage.getItem('email')

  useEffect
  (
    ()=>
    {
      if(email&& email!=='')
      {
        fetch(apiUrl,fetchOptions(queryGetState)({email,key}))
        .then(resp=>resp.json())
        .then
        (
          json=>
          {
            if(json.data&& json.data.getState&& json.data.getState.res)
            {
              setState(JSON.parse(json.data.getState.res))
            }
          }
        )
      }
    },
    [email]
  )

  useEffect
  (
    ()=>
    {
      if((state1&& state1.login.user)||(isOne&& state.login.user))
      {
        const email=isOne?state.login.user.email:state1.login.user.email

        localStorage.setItem('email',email)
        fetch(apiUrl,fetchOptions(querySetState)({email,key,state:JSON.stringify(state)}))
      }
    }
    ,[state]
  )
  return [state,setState]
}
