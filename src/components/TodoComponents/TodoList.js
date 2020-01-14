// your components will all go in this `component` directory.
import React from "react";
import Todo from "../TodoComponents/Todo";

const TodoList = props => {
  console.log(props.todoList);
  return (
    <>
      <div className="list">
        {props.todoList.map(item => (
          <Todo key={item.id} todo={item} toggleTodo={props.toggleTodo} />
        ))}
      </div>
      <div className="container">
        <button className="button" onClick={props.clearCompleted}>
          CLEAR COMPLETED
        </button>
      </div>
    </>
  );
};

export default TodoList;
