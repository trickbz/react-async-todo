import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import NewTodoPreview from './new-todo-preview';
import todosRepository from '../db/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onNewTodoChange = this.onNewTodoChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.state = {
            newTodoTitle: '',
            todos: todosRepository.getAll()
        }
    }

    onDeleteTodo(todo) {
        if (confirm(`Do you really want to delete a todo with title ${todo.title}`)) {
            todosRepository.delete(todo.id);
            this.setState({
                todos: todosRepository.getAll()
            })
        }
    }

    onAddTodo(title) {
        todosRepository.add(title);
        this.setState({
            newTodoTitle: '',
            todos: todosRepository.getAll()
        });
    }

    completeTodo(todo) {
        todo.completed = !todo.completed;
        todosRepository.update(todo);
        this.setState({
            todos: todosRepository.getAll()
        });
    }

    onNewTodoChange(text) {
        if (text) {
            this.setState({
                newTodoTitle: text
            });
        }
    }

    render() {
        return (
            <div>
                <AddTodo
                    onNewTodoChange={this.onNewTodoChange}
                    addTodoButtonText="Add Fucking Todo"
                    onAddTodo={this.onAddTodo}
                />
                <TodoList
                    todos={this.state.todos}
                    onDeleteTodo={this.onDeleteTodo}
                    completeTodo={this.completeTodo}
                />
                <NewTodoPreview text={this.state.newTodoTitle} />
            </div>
        )
    }
}

export default App;