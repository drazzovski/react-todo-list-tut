import React, { Component } from 'react'
import TodoItem from "./TodoItem"

export default class TodoList extends Component {


    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                {items.map(x => {
                    return (
                        <TodoItem key={x.id} title={x.item}
                            handleDelete={() => handleDelete(x.id)}
                            handleEdit={() => handleEdit(x.id)} />
                    )
                })}

                <button type="button"
                    onClick={clearList}
                    className="btn btn-danger btn-block text-capitalize mt-5">
                    clear</button>
            </ul>
        )
    }
}
