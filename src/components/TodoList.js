
import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {

    return (
        <ul>
            {
                props.todos.map(item => {
                    return <li key={item.id}>
                        {item.text}
                        <button onClick={() => props.removeTodo(item.id)}>Delete</button>
                    </li>
                })
            }
        </ul>
    );
}


TodoList.propTypes = {

    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,

}

export default TodoList;