import React from 'react';

const TodoFilterLink = ({onFilterClick, children, active}) => {
    if (active) {
        return <span>{children}</span>
    }
    
    return (
        <a href="#"
           onClick={(e) => {
                e.preventDefault();
                onFilterClick;
           }}
        >
            {children}
        </a>
    )
};

export default TodoFilterLink;