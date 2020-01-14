import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todoItems = [
  {
    name: "Pull a Banksy",
    id: 1,
    completed: false
  },
  {
    name: "Rescue all dogs",
    id: 2,
    completed: false
  },
  {
    name: "Win the Olympics",
    id: 3,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // This constructor function
  constructor() {
    super();
    this.state = {
      todoList: todoItems,
      todoText: ""
    };
    // console.log(this.state.todoList)
  }

  // This function allows the user to toggle todo items
  // It passes the id into
  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(item => {
      // This if statement checks the id of the todo item the user clicks on
      // against the items on the todo list and changes the value of the
      // 'completed' key to its opposite.
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // This code updates the Todo List when
    // an item is clicked to signify it is completed
    this.setState({
      todoList: newTodoList
    });
  };


  // This handler is passed down to the TodoForm component as props.
  // It allows the user to type in the input field.
  handleChanges = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  // This handler is passed down to the TodoForm component as props.
  // Once the user has hit some keys in the input field,
  // it allows the user to add their desired text as a todo item
  // to the todo list.
  handleSubmit = e => {
    e.preventDefault();
    this.addTodo(this.state.todoText);
    e.target.reset();
  };


  // This function is passed through as props to TodoForm.
  // It creates a new object for the todoList.
  // (todoTitle is the argument inputted by the user in the TodoForm component)
  // Then it sets state by taking the existing todoList array
  // and adding the newTodo object named by the user.
  addTodo = todoTitle => {
    const newTodo = {
      name: todoTitle,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  // This function filters the todoList 
  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todoItem => {
        return todoItem.completed === false
      })
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Welcome to your To-Do App!</h2>
        <h3>Current To-Do List</h3>
        <TodoList todoList={this.state.todoList} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
        <TodoForm
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
