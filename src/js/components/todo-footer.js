import React from 'react';
import FilterLink from './todo-filter-link';

const TodoFilter = (props) => (
    <div>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </div>
);

export default TodoFilter;