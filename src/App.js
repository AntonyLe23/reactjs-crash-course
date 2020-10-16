import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todoLists: [
      {
        id: 1,
        title: "Don nha",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: 3,
        title: "kiss wife",
        completed: true,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todoLists: this.state.todoLists.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete todo
  delTodo = (id) => {
    this.setState({
      todoLists: [...this.state.todoLists.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todosFromApp={this.state.todoLists}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
