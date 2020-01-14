import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

// console.log(todoItems)

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  // This constructor function 
  constructor () {
    super();
    this.state = {
      todoList: todoItems
    };
    // console.log(this.state.todoList)
  }

  // This function allows the user to toggle todo items 
  // It passes the id into 
  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    // This code updates the Todo List 
    this.setState({
      todoList: newTodoList
    });
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

  render() {
    return (
      <div>
        <h2>Welcome to your To-Do App!</h2>
        <h3>Current To-Do List</h3>
        <TodoList todoList={this.state.todoList} toggleTodo={this.toggleTodo}/>
        <TodoForm addTodo={this.addTodo}/>
        <input type="submit" value="Submit"/>
        <input type="submit" value="Clear All"/>
      </div>
    );
  }
}

export default App;
