import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form >
                <label>
                    Treść zadania:
                <input type="text" text={this.state.text} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>      
        );
    }
}

export default TodoForm;