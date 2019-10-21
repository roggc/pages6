import React from 'react'
import {Div} from './styled'
import graphql,{apiUrl} from '../../graphql/index'
import Spinner from '../spinner/index'

const loginQuery=
`
mutation ($email:String!,$psswrd:String!)
{
  login(email:$email,psswrd:$psswrd)
  {
    errors
    {
      name
      message
      function
    }
    error
    {
      name
      message
      function
    }
    res
    {
      name
      email
      id
    }
  }
}
`
const logoutQuery=
`
mutation
{
  logout
}
`

export default
({redux:{state:{login},dispatch}})=>
{
  const loginCb=
  json=>
  {
    let res
    dispatch({type:'LOGIN_SET_FETCHING',val:false})
    if(res=json.login.res)
    {
      dispatch({type:'LOGIN_SET_USER',val:{email:res.email,name:res.name}})
      //dispatch({type:'LOGIN_SET_SHOW_LOGIN',val:false})
    }
  }
  const logoutCb=
  json=>
  {
    if(json.logout)
    {
      dispatch({type:'LOGIN_RESET_CREDENTIALS'})
      //dispatch({type:'LOGIN_SET_SHOW_LOGIN',val:true})
      dispatch({type:'LOGIN_RESET_USER'})
    }
    dispatch({type:'LOGIN_SET_FETCHING',val:false})
  }
  const loginClick=
  e=>
  {
    dispatch({type:'LOGIN_SET_FETCHING',val:true})
    graphql(loginQuery)(login.credentials)(apiUrl)(loginCb)
  }
  const emailChange=
  e=>
  dispatch
  (
    {
      type:'LOGIN_SET_EMAIL'
      ,val:e.target.value
    }
  )
  const psswrdChange=
  e=>
  dispatch
  (
    {
      type:'LOGIN_SET_PSSWRD'
      ,val:e.target.value
    }
  )
  const logoutClick=
  e=>
  {
    dispatch({type:'LOGIN_SET_FETCHING',val:true})
    graphql(logoutQuery)({})(apiUrl)(logoutCb)
  }
  const el=
  <Div>
    {
      login.fetching?
      <div className='modal'>
        <div className='center'>
          <Spinner/>
        </div>
      </div>:
      ''
    }
    <div className='center'>
      <div className='center2'>
      {
        login.user?
        <div className='row'>
          hola {login.user.name}.&nbsp;<a onClick={logoutClick}><strong>logout</strong></a>
        </div>:
        <div>
          <div className='row'>
            <div>email</div>
            <div><input value={login.email} onChange={emailChange}/></div>
          </div>
          <div className='row'>
            <div>password</div>
            <div><input value={login.psswrd} onChange={psswrdChange}/></div>
          </div>
          <div className='row last'>
            <button onClick={loginClick}>login</button>
          </div>
        </div>
      }
      </div>
    </div>
  </Div>
  return el
}
