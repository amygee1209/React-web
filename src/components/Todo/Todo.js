import './Todo.css';
import TodoItem from './TodoItem';
import TodoDB from './TodoDB';
import React from 'react';

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodoDB
    }
    this.handleChange = this.handleChange.bind(this)
  }
    
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )    
  }
}

export default Todo;