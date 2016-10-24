import React from 'react';
import NewTodoPreview from './new-todo-preview';

class AddTodoStateful extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Default text'
        };
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Todo title.."
                    value={this.state.text}
                    onChange={this.onTextChanged}
                />
                <button>Add Todo</button>
                <NewTodoPreview text={this.state.text} />
            </div>
        )
    }
}

export default AddTodoStateful;