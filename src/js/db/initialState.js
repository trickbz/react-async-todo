export let nextTodoId = 1;
const CreateTodo = (title, completed = false) => {
    return {
        title,
        id: nextTodoId++,
        completed
    };
};

export default [
    CreateTodo('Todo 1'),
    CreateTodo('Todo 2', true),
    CreateTodo('Todo 3')
];