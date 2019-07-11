import React, { Component } from 'react';
import './App.css';
import Employees from './Components/Employee/Employees';
import { Route, Switch, withRouter, Redirect,Link } from 'react-router-dom';
import CreateEmployee from './Components/Create/Create';
import Header from './Components/Header/Header';

class App extends Component {

  state= {
    price:10,
    salary:20000
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log("App.js | Component Shoud Mount");
    console.log(nextState.price);
    return true;
  
  }

  componentWillMount() {
    console.log("App.js | Component Will Mount");
  }  

  componentDidMount() {
    console.log("App.js | Component Did Mount");
  }  
 
  componentWillUnmount() {

    console.log("App.js | Component will UnMount");
   
  }

  changePriceHandler = () => {
      this.setState({price:30});
  }
  
  render() {

    const routes = (
      <Switch>
        <Route path="/emp-list" component = {Employees}
        />
        <Route path="/emp-create" component = {CreateEmployee}
        />          
      </Switch>
    );
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
