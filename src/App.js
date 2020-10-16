import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todoLists : [
      {
        id : 1,
        title : "Don nha",
        completed : false
      },
      {
        id : 2,
        title : "Dinner with wife",
        completed : false
      },
      {
        id : 3,
        title : "kiss wife",
        completed : false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todosFromApp={this.state.todoLists}/>  
      </div>
    );
  }
}

export default App;
