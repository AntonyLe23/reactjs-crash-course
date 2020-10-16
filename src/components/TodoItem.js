import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "lightgrey",
      borderBottom: "1px #ccc dotted",
      padding: "1px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  //   markCompete = (e) => {
  //     console.log(this.props);
  //   };

  render() {
    const { id, title } = this.props.todo;
    return (
      // // ==> inline style must have 2 {{}} <==
      // <div style={{backgroundColor:'#f4f4f4'}}>
      //     <p>{ this.props.todo.title }</p>
      // </div>

      // // ==> style not inline just have 1 {} <==
      // <div style={itemStyle}>
      //     <p>{ this.props.todo.title }</p>
      // </div>

      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

// const itemStyle = {
//   backgroundColor: "lightgrey",
// };

const btnStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "3px 7px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default TodoItem;
