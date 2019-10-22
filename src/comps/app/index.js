import React,{createContext,useState} from 'react'
import {Div,Container,Fade,FloatL,FloatR,Container2,Abs} from './styled'
import Header from '../header/index'
import Footer from '../footer/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from '../login/index'
import About from '../about/index'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Hits from '../hits/index'
import PageCounter from '../pageCounter/index'
import Todo from '../todo/index'
import initialState from './state'
import useStateFromDb from '../../hooks/useStateFromDb'
import {UserCtx} from '../../ctx/index'
import Signin from '../signin/index'
import Test1 from '../test1/index'

export default
()=>
{
  // const [state1,setState1]=useState(initialState)
  // const [state2,setState2]=useState(initialState)
  // const [state3,setState3]=useState(initialState)
  // const [state4,setState4]=useState(initialState)
  const [state1,setState1]=useStateFromDb(initialState,'state1',true)
  const [state2,setState2]=useStateFromDb(initialState,'state2',false,state1)
  const [state3,setState3]=useStateFromDb(initialState,'state3',false,state1)
  const [state4,setState4]=useStateFromDb(initialState,'state4',false,state1)
  const el=
  <Div>
  <UserCtx.Provider value={state1.login.user}>
  <Router>
    <Container>
      <Header state={state1} setState={setState1}/>
    </Container>
    <Container2>
        <Route render=
        {
          ({location})=>
          <Fade><TransitionGroup><CSSTransition
            timeout={450}
            key={location.key}
            classNames='fade'
            appear={true}>
            <Switch location={location}>
              <Route path='/' exact render=
              {
                ()=>
                <Abs><Signin state={state1} setState={setState1}/></Abs>
              }/>
              <Route path='/login' render=
              {
                ()=>
                <Abs><Login state={state1} setState={setState1}/></Abs>
              }/>
              <Route path='/about' render={()=><Abs><About/></Abs>}/>
              <Route path='/hits' render={()=><Abs><Hits/></Abs>}/>
              <Route path='/counters1' render=
              {
                ()=>
                {
                  const el=
                  <Abs>
                    <PageCounter
                    state1={state1} setState1={setState1}
                    state2={state2} setState2={setState2}/>
                  </Abs>
                  return el
                }

              }/>
              <Route path='/counters2' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  state1={state3} setState1={setState3}
                  state2={state4} setState2={setState4}/>
                </Abs>
              }/>
              <Route path='/todos1' render=
              {
                ()=>
                <Abs>
                  <Todo state={state1} setState={setState1}/>
                </Abs>
              }/>
              <Route path='/todos2' render=
              {
                ()=>
                <Abs>
                  <Todo state={state2} setState={setState2}/>
                </Abs>
              }/>
            </Switch>
          </CSSTransition></TransitionGroup></Fade>
        }/>
    </Container2>
    <Container>
      <Footer/>
    </Container>
    </Router>
    </UserCtx.Provider>
  </Div>
  return el
}
