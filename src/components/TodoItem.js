import React, { Component } from 'react'
import PropTypes from 'prop-types' 

export class TodoItem extends Component {
    render() {
        return (
            // inline style must have 2 {{}}
            // <div style={{backgroundColor:'#f4f4f4'}}>
            //     <p>{ this.props.todo.title }</p>
            // </div>

            // style not inline just have 1 {}
            <div style={itemStyle}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor:'lightgrey'
}

export default TodoItem
