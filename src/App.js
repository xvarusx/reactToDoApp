import React, { Component } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoCard from "./components/ToDoCard";
import AddTask from "./components/AddTask";
class App extends Component {
  state = {
    todos: [
      {
        id: Math.random(),
        action: "learn html",
        isDone: true,
      },
      {
        id: Math.random(),
        action: "learn redux",
        isDone: false,
      },
    ],
  };

  handleDelate = (x) => {
    this.setState({ todos: this.state.todos.filter((el) => el.id !== x) });
  };
  hundleComplete = (i) => {
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === i ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  handelAdd = (input) => {
    const newTask = { id: Math.random(), action: input, isDone: false };
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  render() {
    return (
      <div className="App">
        <AddTask add={this.handelAdd} />
        <ToDoList
          list={this.state.todos}
          del={this.handleDelate}
          comp={this.hundleComplete}
        />
      </div>
    );
  }
}

export default App;
