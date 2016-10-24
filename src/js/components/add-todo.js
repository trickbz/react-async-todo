import React from 'react';

const AddTodo = (props) => {
    let input;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const value = input.value.trim();
            if (value){
                props.onAddTodo(value);
                input.value ='';
            }

        }}>
            <input
                type="text"
                placeholder="Todo title..."
                onChange={(e) => {
                    var value = e.target.value.trim();
                    if (value) {
                        props.onNewTodoChange(value);
                    }
                }}
                ref={node => {input = node}}
            />
            <button type="submit">{props.addTodoButtonText}</button>
        </form>
    )
};

export default AddTodo;
