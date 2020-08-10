import React, { Component } from 'react';
import TodoList from './todoList';

class TodoForm extends Component {
  state = {
    todolist: [],
    currentItem: {
      name: '',
      date: new Date(),
    },
  };

  handleChange = (e) => {
    const currentItem = { ...this.state.currentItem };
    currentItem.name = e.target.value;
    this.setState({ currentItem });
  };

  handleAdd = (e) => {
    e.preventDefault();
    let currentItem = { ...this.state.currentItem };
    const todolist = [...this.state.todolist];

    todolist.push(currentItem);
    currentItem = {
      name: '',
      date: new Date(),
    };
    this.setState({ todolist, currentItem });
  };

  handleDelete = (e) => {
    const name = e.name;
    let todolist = [...this.state.todolist];
    todolist = todolist.filter((t) => t.name !== name);
    this.setState({ todolist });
  };

  render() {
    const { currentItem, todolist } = this.state;
    return (
      <React.Fragment>
        <input
          className="form-control"
          type="text"
          value={currentItem.name}
          onChange={(e) => this.handleChange(e)}
        />
        <button
          className="btn btn-primary my-2 form-control"
          onClick={(e) => this.handleAdd(e)}
        >
          Add
        </button>

        <TodoList onDelete={(e) => this.handleDelete(e)} todos={todolist} />
      </React.Fragment>
    );
  }
}

export default TodoForm;
