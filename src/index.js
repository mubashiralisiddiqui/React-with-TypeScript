import React from 'react';
import ReactDOM from 'react-dom';
/*import  App  from "./components/App";
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
  */

  class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.addOne = this.addOne.bind(this)
  }
  
  addOne() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    return (
      <div>
        <button
          onClick={ this.addOne }>
          Increment
        </button>
        { this.state.counter }
      </div>
    )
  }
}

ReactDOM.render(
<App/>,
  document.getElementById('root')
);
