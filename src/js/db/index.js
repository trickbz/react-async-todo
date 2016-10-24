import _ from 'lodash';
import initialState from './initialState';
let nextTodoId = initialState.length + 1;

export default {
    getAll() {
        return initialState;
    },
    add(title) {
        initialState.push({
            title,
            completed: false,
            id: nextTodoId++
        })
    },
    delete(id) {
        _.remove(initialState, todo => todo.id == id);
    },
    update(todoPartial) {
        let todoToUpdate = _.find(initialState, todo => todo.id == todoPartial.id);
        Object.assign(todoToUpdate, todoPartial);
    }
};