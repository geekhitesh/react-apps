import React, { Component } from 'react';
import './App.css';
import Person  from './Components/Person';

class App extends Component {

  state = {
    person : [
      {name: "Hitesh", age:29, city: "Noida"},
      {name: "Rajesh", age:42, city: "Faridabad"},
      {name: "Rakesh", age:41, city: "Gurgaon"},
    ],
    employee: {name:"Gaurav"}
  }

  nameChangeHandler = (event) => {
    let updatedName = event.target.value;
    this.setState({
      person : [
      {name: updatedName, age:29, city: "Noida"},
      {name: "Rajesh", age:42, city: "Faridabad"},
      {name: "Rakesh", age:41, city: "Gurgaon"},
    ]});

  }


  empNameChangeHandler =  () => {
    let updatedName = "Rajeev";
    this.setState({
      employee: {name:updatedName}
    });
  }

  render() {
    return(
      <div className="App">
          <Person 
              name={this.state.person[0].name} 
              age={this.state.person[0].age}
              change={this.nameChangeHandler}
          />  
          <Person 
              name={this.state.person[1].name} 
              age={this.state.person[1].age}
          />  
          <Person 
              name={this.state.person[2].name} 
              age={this.state.person[2].age}
          />   
      </div>
    );
  }


}

export default App;
