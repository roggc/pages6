import React,{useState} from 'react'
import {} from './styled'

export default
()=>
{
  const [state, setState] = useState({count:0})
  const handleAlertClick=
  ()=>
  setTimeout
  (
    ()=>
    {
      alert('You clicked on: ' + state.count)
    }
    ,3000
  )
  const el=
  <div>
    <p>You clicked {state.count} times</p>
    <button onClick={()=>setState({count:state.count+1})}>
      Click me
    </button>
    <button onClick={handleAlertClick}>
      Show alert
    </button>
  </div>
  return el
}
