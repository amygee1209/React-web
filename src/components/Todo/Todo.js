import './Todo.css';
import TodoItem from './TodoItem';
import TodoDB from './TodoDB';
import React, {useState} from 'react';
import Timer from './Timer';

export default function Todo() {
  const [todos, setTodos] = useState(TodoDB);

  function handleChange(id) {
    setTodos(
      todos.map(item => 
        item.id === id 
        ? {...item, completed : !item.completed} 
        : item 
      )
     )
  }
  
  const todoItems = todos.map(item => {
    return(
      <TodoItem 
        key={item.id} 
        item={item} 
        handleChange={handleChange}
      />
    )
  });

  return (
    <div>
      <Timer />
      <div className="todo-list">
        {todoItems}
      </div>
    </div>
  )
}