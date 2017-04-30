import React from 'react';

import Header from './Header';
import TodoList from './TodoList';

class TodoInput extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddItem(this.refs.input.value);
    this.refs.input.value = "";
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="input" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoInput;