import React from 'react';

const TodoItem = (props) => (
    <li>
        <span
            onClick={() => {props.completeTodo(props.todo)}}
            style={{
                textDecoration: props.todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
        >
            {props.todo.title}
        </span>
        <span
            style={{cursor: 'pointer'}}
            onClick={() => {props.onDeleteTodo(props.todo)} }
        >
            &#x274C;
        </span>
    </li>
);

export default TodoItem;