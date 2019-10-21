import React from 'react'
import {Fade} from './styled'
import Home from '../home/index'
import About from '../about/index'
import {CSSTransition} from 'react-transition-group'
import {Route,Switch,useLocation} from 'react-router-dom'

export default
()=>
{
  let location = useLocation()
   const el=
  <Fade>
    <CSSTransition
      timeout={300}
      key={location.key}
      classNames='fade'>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </CSSTransition>
  </Fade>
  return el
}
