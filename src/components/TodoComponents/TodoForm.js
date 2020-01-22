import React from "react";


const TodoForm = props => {

  return (
    <form className="stacked add-form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="todo"
        value={props.todoText}
        onChange={props.handleChanges}
      />
      <button className="button">ADD TO LIST</button>
    </form>
  );
};

export default TodoForm;
