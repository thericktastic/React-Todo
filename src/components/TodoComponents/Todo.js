import React from 'react';

const Todo = props => {
    return (
        <div className={`item${props.todo.completed ? ' completed' : ''}`} onClick={() => props.toggleTodo(props.todo.id)}>
        
        <p>- {props.todo.name}</p>
        </div>
    );
};

export default Todo;