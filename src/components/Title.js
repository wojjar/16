import React from 'react';

class Title extends React.Component {

    
   

    render() {
        return (
            <div >
                <h1>Lista do zrobienia</h1>
                <p>{"Liczba zadań: " + this.props.todoslength}</p>
            </div>
        );
    }
}

export default Title;