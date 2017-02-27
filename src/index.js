import React from 'react';
import ReactDOM from 'react-dom';
// import{createstore} from 'redux'
import { createStore } from 'redux'

import  App  from "./components/App";
/*  import  Home  from "./components/home";
  import  About  from "./components/about";

// import  About  from "./";
import  Contact  from "./components/contact";
import './index.css';


import {Router,Route,hashHistory,IndexRoute,browserHistory}from 'react-router';
ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route/>
    </Route>
  </Router>
  ,
  */

  function reducer(state,action){
    switch (action.type){
      case 'increment':
      return state = state+ action.payload;
      break;
      case  'decrement':
      return state = state -action.payload;
      break;
      default :
      return state
    }
  }

let store = createStore (reducer,1)

store.subscribe(()=>
  console.log("store updated"+store.getState()
  )

)
store.dispatch({type:'increment',
                payload: 100
})
store.dispatch({type:'decrement',
                payload: 100
})


ReactDOM.render(
<App/>,
  document.getElementById('root')
);
