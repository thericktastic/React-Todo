import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
