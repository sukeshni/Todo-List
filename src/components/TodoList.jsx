import React from 'react';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  handleAddItem(name) {
    const newItems = this.state.items.concat({ name: name, done: false});
    this.setState({ items: newItems });
  }

  handleToggleDone(item) {
    const newItems = this.state.items.slice();
    newItems[newItems.indexOf(item)].done = !item.done;
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map( item => <TodoItem name={item.name} done={item.done} onToggleDone={this.handleToggleDone.bind(this, item)}/> )}
        </ul>
        <TodoInput onAddItem={this.handleAddItem.bind(this)} />
      </div>
    );
  }
}

export default TodoList;