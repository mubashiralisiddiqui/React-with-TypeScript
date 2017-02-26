import React from 'react';
import ReactDOM from 'react-dom';
import  App  from "./components/App";
 import  Home  from "./components/home";
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
  document.getElementById('root')
);
