import React from 'react';
import TodoItem from './todo-item';

const TodoList = (props) => (
    <ul>
        {
            props.todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onDeleteTodo={props.onDeleteTodo}
                    completeTodo={props.completeTodo}
                />
            ))
        }
    </ul>
);

export default TodoList;