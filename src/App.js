import React, { Component } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }
  handleChange = e => {

    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.item === "")
      return

    const newItem = {
      id: this.state.id,
      item: this.state.item
    }

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    })
  };

  clearList = () => {
    this.setState({
      items: []
    })
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(x => x.id !== id)

    this.setState({
      items: filteredItems
    })
  };
  handleEdit = id => {

    if (this.state.editItem === true)
      return

    const editItem = this.state.items.find(x => x.id === id);
    const filteredItems = this.state.items.filter(x => x.id !== id)

    this.setState({
      items: filteredItems,
      item: editItem.item,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={this.state.item} editItem={this.state.editItem}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
