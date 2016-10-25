import React from 'react';
import FilterLink from './todo-filter-link';

const TodoFooter = (props) => (
    <div>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL" {...props}>
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE" {...props}>
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED" {...props}>
            Completed
        </FilterLink>
    </div>
);

export default TodoFooter;