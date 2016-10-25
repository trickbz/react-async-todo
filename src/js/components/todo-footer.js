import React from 'react';
import FilterLink from './todo-filter-link';
import {VisibilityFilters} from '../constants';

const TodoFooter = (props) => (
    <div>
        Show:
        {" "}
        <FilterLink filter={VisibilityFilters.SHOW_ALL} {...props}>
            All
        </FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} {...props}>
            Active
        </FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} {...props}>
            Completed
        </FilterLink>
    </div>
);

export default TodoFooter;