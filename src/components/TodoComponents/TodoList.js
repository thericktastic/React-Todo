// your components will all go in this `component` directory.
import React from 'react';
import Todo from '../TodoComponents/Todo';

const TodoList = props => {
    console.log(props.todoList)
    return (
        <div>
        {props.todoList.map(item => (
            <Todo key={item.id} todo={item} toggleItem={props.toggleItem}/>
        ))}
        </div>
    )
}

export default TodoList;