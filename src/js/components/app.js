import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import TodoFooter from './todo-footer';
import todosRepository from '../db/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onNewTodoChange = this.onNewTodoChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
        this.getFilteredTodos = this.getFilteredTodos.bind(this);
        this.state = {
            newTodoTitle: '',
            todos: todosRepository.getAll(),
            visibilityFilter: 'SHOW_ALL'
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

    setVisibilityFilter(filter) {
        this.setState({
            visibilityFilter: filter
        })
    }

    getFilteredTodos(filter) {
        switch (filter) {
            case 'SHOW_COMPLETED':
                return todosRepository.getAll().filter(todo => todo.completed);
            case 'SHOW_ACTIVE':
                return todosRepository.getAll().filter(todo => !todo.completed);
            default:
                return todosRepository.getAll();
        }
    }

    render() {
        return (
            <div>
                <AddTodo
                    onNewTodoChange={this.onNewTodoChange}
                    addTodoButtonText="Add Todo"
                    onAddTodo={this.onAddTodo}
                />
                <TodoList
                    todos={this.getFilteredTodos(this.state.visibilityFilter)}
                    onDeleteTodo={this.onDeleteTodo}
                    completeTodo={this.completeTodo}
                />
                <TodoFooter
                    setVisibilityFilter={this.setVisibilityFilter}
                    visibilityFilter={this.state.visibilityFilter}
                />
            </div>
        );
    }
}

export default App;