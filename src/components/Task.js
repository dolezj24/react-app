import React from 'react';

class Task extends React.Component {
    render() {
        return(<div>
            <h1>Task {this.props.task.id}</h1>
            </div>
                )
    }
}

export default Task;