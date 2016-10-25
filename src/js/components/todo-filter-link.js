import React from 'react';

const TodoFilterLink = ({setVisibilityFilter, children, visibilityFilter, filter}) => {
    if (visibilityFilter == filter) {
        return <span>{children}</span>
    }
    
    return (
        <a href="#"
           onClick={(e) => {
                e.preventDefault();
                setVisibilityFilter(filter);
           }}
        >
            {children}
        </a>
    )
};

export default TodoFilterLink;