import './Todo.css';
import TodoItem from './TodoItem';
import TodoDB from './TodoDB';
import React, {useState, useEffect} from 'react';

function Todo() {
  const [count, setCount] = useState(60)
  const [todos, setTodos] = useState(TodoDB)
  
  useEffect(() => {
    if (count === 0) return
    
    const intervalId = setInterval(() => {
      setCount(count - 1)
    }, 1000)
    return () => clearInterval(intervalId);
  }, [count])

  function handleChange(id) {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(todo => {
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
  
  const todoItems = todos.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange}/>)
    
  return (
    <div>
      <h3>You have {count} seconds left</h3>
      <div className="todo-list">
        {todoItems}
      </div>
    </div>
  )
}

export default Todo;