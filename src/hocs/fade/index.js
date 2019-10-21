import React,{useRef,useEffect} from 'react'
import {Div} from './styled'
import './index.css'

export default
C=>(props)=>
{
  const ref1 = useRef(null)
  useEffect
  (
    ()=>
    {
      ref1.current.className='fade'
      return ()=>{ref1.current.className=''}
    }
  )

  const el=
  <Div ref={ref1}><C {...props}/></Div>

  return el
}
